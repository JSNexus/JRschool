import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Logo e Contato */}
        <div className="text-center">
          <Image
            src="/icon.svg"
            alt="logo junior school"
            width={50}
            height={50}
            className="mx-auto mb-4"
          />
          <div className="space-y-2 text-gray-600">
            <p className="flex items-center justify-center">
              <MapPin className="mr-2 text-blue-500" size={20} />
              Mozambique, Tete
            </p>
            <p className="flex items-center justify-center">
              <Mail className="mr-2 text-green-500" size={20} />
              contato@tetejuniorschool.com.mz
            </p>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <h4 className="font-bold text-blue-800 mb-3">Sobre</h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-600 hover:text-blue-700"
              >
                Nossa História
              </Link>
              <Link
                href="/team"
                className="block text-gray-600 hover:text-blue-700"
              >
                Equipe
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-blue-800 mb-3">Educação</h4>
            <div className="space-y-2">
              <Link
                href="/levels"
                className="block text-gray-600 hover:text-blue-700"
              >
                Níveis
              </Link>
              <Link
                href="/activities"
                className="block text-gray-600 hover:text-blue-700"
              >
                Atividades
              </Link>
            </div>
          </div>
        </div>

        {/* Ações e Redes Sociais */}
        <div className="text-center">
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition mb-4 inline-block"
          >
            Fale Conosco
          </Link>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="https://instagram.com"
              className="text-blue-600 hover:scale-110 transition"
            >
              Instagram
            </Link>
            <Link
              href="https://facebook.com"
              className="text-blue-600 hover:scale-110 transition"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-blue-200 text-sm text-gray-500">
        © 2024 Tete Junior School.
        <Link href="/privacy" className="ml-2 text-blue-600 hover:underline">
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
