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
    <section>
      {/* Title */}
      <div className="flex flex-col justify-center">
        <Title
          title="Zapix Blogs"
          description="Stay updated with the latest news, tips, and ideas from the world of Zapix. Our blog is the place to explore everything about our token — from updates and community highlights to learning guides and future plans. Whether you're new or experienced, there's always something useful here."
        />
      </div>

      {/* Blog  */}

      <div className="mx-auto mt-[32px] flex min-h-[433px] max-w-[690px] gap-[24px] overflow-x-scroll px-[16px] md:px-0">
        {blogs.map((blog, id) => (
          <div
            key={id}
            className="rounded-[88px] border border-[#636363] px-[22px]"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
