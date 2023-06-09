import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import UnderlineControl from "@tiptap/extension-underline";
import { Label } from "./Label";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../cards/SideForm";
import { Button, TextInput } from "@mantine/core";

export const TextAreaField = ({
  label,
  index,
  form,
}: {
  label: string;
  index: number;
  form: UseFormReturnType<FormValues>;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      UnderlineControl,
      Link,
      // SuperscriptControl,
      // SubscriptControl,
      // HighlightControl,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    onUpdate: ({ editor }) => {
      form.setFieldValue(`cardValues.${index}.value`, editor.getHTML());
    },
  });

  return (
    <div>
      <Label label={label} />
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
};
