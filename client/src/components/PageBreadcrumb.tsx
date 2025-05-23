import React from 'react';
import { Link } from 'wouter';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <nav className={`py-3 px-4 md:px-6 ${className}`}>
      <ol className="flex flex-wrap items-center text-sm md:text-base text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center">
              {!isLast ? (
                <>
                  <Link href={item.href} className="hover:text-green-600 transition-colors">
                    {item.label}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="font-medium text-gray-800">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default PageBreadcrumb; 