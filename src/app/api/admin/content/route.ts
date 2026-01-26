import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isValidLanguage, isValidPersona } from "@/content/persona";

export async function PUT(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Check authentication
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse body
    const body = await request.json();
    const { lang, persona, content } = body;

    // Validate
    if (!isValidLanguage(lang) || !isValidPersona(persona)) {
      return NextResponse.json(
        { error: "Invalid language or persona" },
        { status: 400 }
      );
    }

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    // Upsert content to database
    const { error } = await supabase
      .from("persona_content")
      .upsert(
        {
          language: lang,
          persona: persona,
          content: content,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "language,persona",
        }
      );

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to save content" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();

    const searchParams = request.nextUrl.searchParams;
    const lang = searchParams.get("lang");
    const persona = searchParams.get("persona");

    if (lang && persona) {
      // Get specific content
      if (!isValidLanguage(lang) || !isValidPersona(persona)) {
        return NextResponse.json(
          { error: "Invalid language or persona" },
          { status: 400 }
        );
      }

      const { data, error } = await supabase
        .from("persona_content")
        .select("*")
        .eq("language", lang)
        .eq("persona", persona)
        .single();

      if (error) {
        return NextResponse.json({ content: null });
      }

      return NextResponse.json({ content: data?.content });
    }

    // Get all content
    const { data, error } = await supabase.from("persona_content").select("*");

    if (error) {
      return NextResponse.json({ contents: [] });
    }

    return NextResponse.json({ contents: data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
