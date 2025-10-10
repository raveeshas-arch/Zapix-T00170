import { motion } from "framer-motion";
import Title from '@/components/ui/Title';
import Blog1 from '../../../assets/Blog1.webp';
import Blog2 from '../../../assets/Blog2.webp';
import Blog3 from '../../../assets/Blog3.webp';

const BlogsSection = () => {
  const blogs = [
    {
      title: 'What is Zapix?',
      Image: Blog1,
      description:
        'Read all about new features, updates, and major announcements about the Zapix token.',
    },
    {
      title: 'How-To Guides',
      Image: Blog2,
      description:
        'Stories, interviews, and highlights from our amazing community members and creators.',
    },
    {
      title: 'Community Spotlights',
      Image: Blog3,
      description:
        'Stories, interviews, and highlights from our amazing community members and creators.',
    },
  ];

  return (
    <section className="overflow-hidden max-w-[1920px] mx-auto">
      {/* Title */}
      <motion.div
        className="flex flex-col justify-center px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title
          title="Zapix Blogs"
        description="Stay updated with the latest news, tips, and ideas from the world of Zapix. Our blog is the place to explore everything about our token — from updates and community highlights to learning guides and future plans. Whether you're new or experienced, there's always something useful here."
        />
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="mx-auto mt-[32px] flex h-[433px] max-w-[700px]  gap-[24px] overflow-x-scroll px-[16px] md:px-0 scrollbar-hide"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {blogs.map((blog, id) => (
          <motion.div
            key={id}
            className="rounded-[88px] border w-[203px] border-[#636363] px-[22px] flex-shrink-0 animate-bounce"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: id * 0.2 }}
            style={{
              animationDelay: `${id * 0.5}s`,
              animationDuration: '6s',
            }}
          >
            <img
              src={blog.Image}
              alt="blogimages"
              className="mt-[16px] rounded-full"
            />
            <div className="mx-auto mt-[24px] w-[160px]">
              <h1 className="text-left font-sans text-[24px] leading-[32px] font-normal">
                {blog.title}
              </h1>
              <p className="mt-[10px] text-left font-sans text-[14px] leading-[20px] font-normal">
                {blog.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogsSection;
