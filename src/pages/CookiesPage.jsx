
import { useLanguage } from '../components/LanguageProvider';

const CookiesPage = () => {
  const { content } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-8 mt-32">
      <h1 className="text-3xl font-bold text-primary mb-4">{content.cookiesPolicy.title}</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.introduction}</h2>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.whatAreCookies.header}</h2>
        <p className="text-lg text-primary">{content.cookiesPolicy.whatAreCookies.content}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.howWeUseCookies.header}</h2>
        <p className="text-lg text-primary">{content.cookiesPolicy.howWeUseCookies.content}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.cookiesList.header}</h2>
        <ul className="list-disc pl-6 text-lg text-primary">
          <li>{content.cookiesPolicy.cookiesList.essential}</li>
          <li>{content.cookiesPolicy.cookiesList.analytics}</li>
          <li>{content.cookiesPolicy.cookiesList.advertising}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.yourChoices.header}</h2>
        <p className="text-lg text-primary">{content.cookiesPolicy.yourChoices.content}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.changesToPolicy.header}</h2>
        <p className="text-lg text-primary">{content.cookiesPolicy.changesToPolicy.content}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">{content.cookiesPolicy.contact.header}</h2>
        <p className="text-lg text-primary">{content.cookiesPolicy.contact.content}</p>
      </section>
    </div>
  );
};

export default CookiesPage;
