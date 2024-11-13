// components/DonationSection.tsx
import { FC } from 'react';
import DonationCard from './DonationCard';
import { IComedor, Post } from '@/code/db/Comedor.Model';

export interface DonationCardData {
  avatar: string;
  title: string;
  date: string;
  organization: string;
  isCompleted: boolean;
  description: string;
  icons: { src: string; alt: string }[];
}

interface DonationSectionProps {
  posts: Post[];
  comedor: { nombre: string; fotoPerfil: string }; // Debes pasar el comedor de alguna manera
}

const DonationSection: FC<DonationSectionProps> = ({ posts, comedor }) => {
  return (
    <section className="mt-2">
      <div className="space-y-4">
        {posts.map((post, index) => (
          <DonationCard key={index} post={post} comedor={comedor} />
        ))}
      </div>
    </section>
  );
};
export default DonationSection;