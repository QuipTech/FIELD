// knowledge.md is inlined as a string by esbuild (Loader: .md=text in template.yaml).
declare module "*.md" {
  const content: string;
  export default content;
}
