import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FooterLinksProps {
    className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  return (
    <div className={cn("text-center text-sm text-muted-foreground", className)}>
      or,{' '}
      <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">
        sign up
      </Button>
    </div>
  );
};

export default FooterLinks;
