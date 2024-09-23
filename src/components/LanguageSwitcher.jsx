import { useLanguage } from './LanguageProvider';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('vi')}>Tiếng Việt</button>
    </div>
  );
}
export default LanguageSwitcher;
