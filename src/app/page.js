import FormatterPage from '@/components/FormatterPage';
import { TextFormatterStructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <TextFormatterStructuredData platform="general" tool="text-formatter" />
      <FormatterPage />
    </>
  );
}