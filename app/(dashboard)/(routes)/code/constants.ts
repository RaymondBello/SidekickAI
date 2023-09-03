import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
  syntax: z.string().min(1),
});

export const syntaxOptions = [
  {
    value: "python",
    label: "Python"
  },
  {
    value: "rust",
    label: "Rust"
  },
  {
    value: "javascript",
    label: "Javascript"
  },
  {
    value: "c++",
    label: "C++"
  },
  {
    value: "c",
    label: "C"
  },
  {
    value: "perl",
    label: "Perl"
  },
];
