import React from 'react';

const JobApplication = ({application, index}) => {

    const { company, company_logo, title ,location , linkedin, resume} = application;

    return (
        <div>
             <tr>
        <th>
          <label>
           {index + 1 }
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
          {company}
          
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default JobApplication;