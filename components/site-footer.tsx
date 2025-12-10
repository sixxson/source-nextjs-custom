import Logo from "./logo";
import { SubText, SubTitle } from "./ui/text";
import Link from "next/link";
import { ContactItemData, quickLinksData } from "../config/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const iconMap = {
  MapPin,
  Phone,
  Clock,
  Mail,
};

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container px-2 md:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </SubText>
          </div>
          <div>
            <SubTitle className="text-slate-800 dark:text-slate-300 md:border-0 sm:border-b sm:border-slate-500 sm:border-dashed py-2">
              Quick Links
            </SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="text-slate-800 dark:text-slate-300 md:border-0 sm:border-b sm:border-slate-500 sm:border-dashed py-2">
              Contact Us
            </SubTitle>
            <ul className="space-y-3 mt-4">
              {ContactItemData.map((item, i) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <li key={i} className="group flex items-start space-x-4">
                    <Icon className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle className="text-slate-800 dark:text-slate-300 md:border-0 sm:border-b sm:border-slate-500 sm:border-dashed py-2">
              Newsletter
            </SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
