
import { useLanguage } from '../components/LanguageProvider';

const PrivacyPage = () => {
  const { content } = useLanguage(); // Assuming the content contains the JSON data

  return (
    <div className="container mx-auto p-6 mt-32">
      <h1 className="text-3xl font-bold mb-4">{content.privacyPolicy.title}</h1>
      <p className="mb-4">{content.privacyPolicy.introduction}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{content.privacyPolicy.informationCollection.header}</h2>
        <p>{content.privacyPolicy.informationCollection.content}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{content.privacyPolicy.howWeUseYourInformation.header}</h2>
        <p>{content.privacyPolicy.howWeUseYourInformation.content}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{content.privacyPolicy.informationProtection.header}</h2>
        <p>{content.privacyPolicy.informationProtection.content}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{content.privacyPolicy.yourRights.header}</h2>
        <p>{content.privacyPolicy.yourRights.content}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{content.privacyPolicy.changesToPrivacyPolicy.header}</h2>
        <p>{content.privacyPolicy.changesToPrivacyPolicy.content}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{content.privacyPolicy.contact.header}</h2>
        <p>{content.privacyPolicy.contact.content}</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
