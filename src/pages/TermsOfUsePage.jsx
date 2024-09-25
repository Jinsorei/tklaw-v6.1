import { useLanguage } from '../components/LanguageProvider';

const TermsOfUsePage = () => {
  const { content } = useLanguage(); // Assuming the content contains the JSON data

  return (
    <div className="container mx-auto p-6 mt-32">
        <h1 className="text-3xl font-bold mb-4">{content.termsOfUse.title}</h1>
        <p className="mb-4">{content.termsOfUse.introduction}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{content.termsOfUse.userObligations.header}</h2>
          <p>{content.termsOfUse.userObligations.content}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{content.termsOfUse.intellectualProperty.header}</h2>
          <p>{content.termsOfUse.intellectualProperty.content}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{content.termsOfUse.limitationOfLiability.header}</h2>
          <p>{content.termsOfUse.limitationOfLiability.content}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{content.termsOfUse.modifications.header}</h2>
          <p>{content.termsOfUse.modifications.content}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{content.termsOfUse.contact.header}</h2>
          <p>{content.termsOfUse.contact.content}</p>
        </div>
      </div>
    
  );
};

export default TermsOfUsePage;
