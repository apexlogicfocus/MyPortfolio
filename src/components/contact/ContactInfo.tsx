// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';
import { contactEmail, contactPhone } from '@/data/contact-details';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    ...(contactEmail
      ? [{
          icon: <Mail size={20} className="text-white stroke-2" />,
          label: "Email",
          value: contactEmail.display,
          href: contactEmail.href,
          external: false
        }]
      : []),
    ...(contactPhone
      ? [{
          icon: <Phone size={20} className="text-white stroke-2" />,
          label: "Phone",
          value: contactPhone.display,
          href: contactPhone.href,
          external: false
        }]
      : []),
    { 
      icon: <MapPin size={20} className="text-white stroke-2" />, 
      label: "Location", 
      value: personalInfo.personal.location, 
      href: "#",
      external: false
    },
    { 
      icon: <Github size={20} className="text-white stroke-2" />, 
      label: "GitHub", 
      value: personalInfo.social.github.username, 
      href: personalInfo.social.github.url,
      external: true
    }
  ];

  return (
    <div className="glass-card p-8 rounded-xl flex-1 flex flex-col">
      <h3 className="text-2xl font-semibold mb-6 text-foreground">
        Contact Information
      </h3>
      
      <div className="flex-1 flex flex-col justify-between gap-6">
        {contactDetails.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="flex items-center space-x-4 group hover:text-primary transition-colors duration-200"
          >
            <div className="w-12 h-12 iconic rounded-lg bg-primary group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-medium text-foreground group-hover:text-primary">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
