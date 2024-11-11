// components/SendWhatsAppMessage.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, Input, Button } from '@shadcn/ui';

const SendWhatsAppMessage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Send WhatsApp Message</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Enter phone number (with country code)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={sendWhatsAppMessage} variant="default">
          Send Message
        </Button>
      </CardContent>
    </Card>
  );
};

export default SendWhatsAppMessage;
