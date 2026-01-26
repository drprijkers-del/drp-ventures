import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/pdf/CVDocument";
import {
  getPersonaContent,
  isValidLanguage,
  isValidPersona,
  PERSONA_LABELS,
} from "@/content/persona";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    // Get query params
    const searchParams = request.nextUrl.searchParams;
    const lang = searchParams.get("lang") || "nl";
    const persona = searchParams.get("persona") || "agile-coach";

    // Validate params
    if (!isValidLanguage(lang) || !isValidPersona(persona)) {
      return NextResponse.json(
        { error: "Invalid language or persona" },
        { status: 400 }
      );
    }

    // Get content
    const content = getPersonaContent(lang, persona);
    if (!content) {
      return NextResponse.json(
        { error: "Content not found" },
        { status: 404 }
      );
    }

    // Read profile photo and convert to base64
    const imagePath = join(process.cwd(), "public/images/profiel-foto-2.jpg");
    const imageBuffer = readFileSync(imagePath);
    const photoBase64 = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

    // Generate PDF
    const pdfBuffer = await renderToBuffer(CVDocument({ content, photoBase64 }));

    // Create filename
    const personaLabel = PERSONA_LABELS[lang][persona].replace(/\s+/g, "-");
    const filename = `CV-Dennis-Rijkers-${personaLabel}-${lang.toUpperCase()}.pdf`;

    // Return PDF (convert Buffer to Uint8Array for NextResponse compatibility)
    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
