import { useEffect } from 'react';

interface TypeformEmbedProps {
  formId: string;
}

declare global {
  interface Window {
    tf: any; // You might need to replace 'any' with the correct type if available
  }
}

const TypeformEmbed: React.FC<TypeformEmbedProps> = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => {
      window.tf.createWidget(formId, {
        container: document.querySelector('#typeform-container'),
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div id="typeform-container" data-tf-live={formId}></div>;
};

export default TypeformEmbed;
