// app/page.tsx
import SendWhatsAppMessage from '@/app/components/SendWhatsAppMessage';

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SendWhatsAppMessage />
    </div>
  );
};

export default HomePage;
