import config from "../../config.json" with { type: "json" };
import TemplateRenderer from "@/shared/components/TemplateRenderer";

export default function Home() {
  return <TemplateRenderer config={config} />;
}
