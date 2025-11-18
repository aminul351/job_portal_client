// import React, { Suspense, useEffect, useState } from 'react';
// import ApplicationStatus from './ApplicationStatus';
// import ApplicationList from './ApplicationList';
// import useAuth from '../../hooks/useAuth';

// // const handleApplicationPromise =  (email) => {
// //     return fetch(`http://localhost:3000/application?email=${email}`).then(res => res.json())
// // }


// const MyApplications = () => {
    
// const { user } = useAuth();

//     const [applicationsData, setApplicationsData] = useState(null);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`http://localhost:3000/application?email=${user.email}`)
//                 .then(res => res.json())
//                 .then(setApplicationsData);
//         }
//     }, [user?.email]);

//     return (
//         <div>
//             <ApplicationStatus/>
//             {/* <Suspense fallback={'loading..............'}> */}
//                 <ApplicationList applicationsData={applicationsData}/>
//                 {/* <ApplicationList handleApplicationPromise={handleApplicationPromise(user?.email)}/> */}
//             {/* </Suspense> */}
//         </div>
//     );
// };

// export default MyApplications;















import React, { useEffect, useState } from 'react';
import ApplicationStatus from './ApplicationStatus';
import ApplicationList from './ApplicationList'; // Import from separate file
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const { user } = useAuth();
    const [applicationsData, setApplicationsData] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/application?email=${user.email}`)
                .then(res => res.json())
                .then(setApplicationsData);
        }
    }, [user?.email]);

    return (
        <div>
            <ApplicationStatus/>
            <ApplicationList applicationsData={applicationsData}/>
        </div>
    );
};

export default MyApplications;