import React from 'react'
import WorkItems from './WorkItems';

const data = [{
    year: '2023',
    title: 'React full-stack developer - MERN',
    duration: 'Current',
    Details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium, facilis eligendi omnis libero animi ipsam laudantium quae possimus mollitia. Nemo fugit itaque maxime dolor, ipsam error. Perferendis, sed praesentium!'
},
    {
    year: '2020',
    title: 'React full-stack developer - MERN',
    duration: 'Current',
    Details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium, facilis eligendi omnis libero animi ipsam laudantium quae possimus mollitia. Nemo fugit itaque maxime dolor, ipsam error. Perferendis, sed praesentium!'
},
]
const Work = () => {
   const a = 5
  return (
    <div id="work" className="max-w-[1040px] m-auto mb-1 md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900 pb-16">Work</h1>
      {data.map((item, index) => (
          <WorkItems key={index} year={item.year} title={item.title} duration={item.duration} details={item.Details} />
      ))}
    </div>
  );
}

export default Work