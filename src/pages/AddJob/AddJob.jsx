import React from 'react';

const AddJob = () => {



    const handleAddJob = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        console.log(data);


    

}

    return (
        <div>
            <form onSubmit={handleAddJob}>
                {/* basic  info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Basic Info about job</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input w-full" placeholder="Job Title" />

                    <label className="label">Job Description</label>
                    <input type="text" name='description' className="input w-full" placeholder="Job Description" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input w-full" placeholder="company" />

                    <label className="label">Company Logo</label>
                    <input type="url" name='company_logo' className="input w-full" placeholder="company" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input w-full" placeholder="Location" />
                </fieldset>




                {/* job type  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <label className="label">Job Type</label>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn"  value='Remote' type="radio" name="jobType" aria-label="Remote" />
                        <input className="btn"  value='On-site' type="radio" name="jobType" aria-label="On-site" />
                        <input className="btn"  value='Hybrid' type="radio" name="jobType" aria-label="Hybrid" />
                    </div>
                </fieldset>

                {/* job category  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select name='category' defaultValue="select a job" className="select">
                        <option disabled={true}>select a job</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>


                {/* application deadline  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" name='applicationDeadline' className="input w-full" />
                </fieldset>

                {/* salary range  */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" >
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='min' className="input w-full" placeholder="Min Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input w-full" placeholder="Max Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="select a job" className="select" name='currency'>
                                <option disabled={true}>select a Currency</option>
                                <option>BDT</option>
                                <option>US</option>
                                <option>POUND</option>
                            </select>
                        </div>
                    </div>
                </fieldset>


                {/* job requirements  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job Req(separated by comma)"></textarea>
                </fieldset>

                {/* job responsibilities  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">Job responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job responsibilities(separated by comma)"></textarea>
                </fieldset>

                
                {/* HR info  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
                    <legend className="fieldset-legend">HR info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input w-full" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="text" name='hr_email' className="input w-full" placeholder="HR Email" />

                    
                </fieldset>

<div className="mx-auto w-xs">
    <input type="submit" value="Add Job" className='text-center btn btn-outline' />
</div>

            </form>
        </div>
    );
};

export default AddJob;