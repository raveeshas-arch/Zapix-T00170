import Road1 from '../../assets/road1.webp';
import Road2 from '../../assets/road2.webp';
import Road3 from '../../assets/road3.webp';
import Road4 from '../../assets/road4.webp';
import Road5 from '../../assets/road5.webp';

const Chart = () => {
  const steps = [Road1, Road2, Road3, Road4, Road5];
  return (
    <section className="max-w-[1680px] mx-auto mt-[-150px]">
      <div className="relative bg-black py-16 text-white">
        
        {/* Mobile  layout */}
        <div className="px-4">
          <div className="relative">
            {/* Center vertical dashed line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-2 border-dashed border-white" />
            <div className="flex flex-col gap-6">
              {steps.map((icon, index) => {
                const isLeft = index % 2 === 0; // first on left
                return (
                  <div key={index} className="relative grid grid-cols-2 gap-4 py-4">
                    {/* Center dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-4 border-black bg-white z-10" />
                    {/* Horizontal line from center to icon */}
                    {isLeft ? (
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-full w-8 border-t-2 border-white" />
                    ) : (
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-8 border-t-2 border-white" />
                    )}
                    {/* Left column (icons when isLeft) */}
                    <div className={`flex ${isLeft ? 'justify-end pr-8' : ''}`}>
                      {isLeft && (
                        <div className="rounded-full bg-white p-3 inline-flex items-center justify-center">
                          <img src={icon} alt={`Step ${index + 1}`} className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                    {/* Right column (icons when !isLeft) */}
                    <div className={`flex ${!isLeft ? 'justify-start pl-8' : ''}`}>
                      {!isLeft && (
                        <div className="rounded-full bg-white p-3 inline-flex items-center justify-center">
                          <img src={icon} alt={`Step ${index + 1}`} className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
