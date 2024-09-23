import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-background text-primary py-8 px-4 lg:px-12 mt-60">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-accent transition duration-300"><FaFacebook size={24} /></a>
            <a href="#" className="text-primary hover:text-accent transition duration-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-primary hover:text-accent transition duration-300"><FaInstagram size={24} /></a>
            <a href="#" className="text-primary hover:text-accent transition duration-300"><FaPinterest size={24} /></a>
            <a href="#" className="text-primary hover:text-accent transition duration-300"><FaLinkedin size={24} /></a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
          <p className="mb-2">Tầng 1 toà nhà Rosana, 60 Nguyễn Đình Chiểu, Đa Kao, Q. 1, TP. HCM</p>
          <p className="mb-2">Điện thoại: +84 2 222 1697</p>
          <p className="mb-2">Fax: +84 8 222 02201</p>
          <p>Email: <a href="mailto:khuongdinhtien@gmail.com" className="hover:text-accent transition duration-300">khuongdinhtien@gmail.com</a></p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Xem thêm</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent transition duration-300">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-accent transition duration-300">Bài viết</a></li>
            <li><a href="#" className="hover:text-accent transition duration-300">FAQs</a></li>
            <li><a href="#" className="hover:text-accent transition duration-300">Liên hệ</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Pháp lý</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent transition duration-300">Chính sách sử dụng</a></li>
            <li><a href="#" className="hover:text-accent transition duration-300">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-accent transition duration-300">Chính sách cookie</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center border-t border-accent opacity-50 pt-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Văn phòng Luật sư và Liên danh Khương Đình Tiến.</p>
      </div>
    </footer>
  );
}

export default Footer;
