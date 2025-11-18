import React from 'react';
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobApply = () => {

    const { id: jobId } = useParams()
    const { user } = useAuth()

    const handleJobApply = (e) => {
        e.preventDefault()
        const form = e.target
        const linkedin = form.linkedin.value;
        const github = form.github.value
        const resume = form.resume.value
        console.log(linkedin, github, resume);

        const applications = { jobId, applicant: user.email, linkedin, github, resume }
        axios.post('http://localhost:3000/application', applications)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("Application submitted successfully!");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    // axios diye data backend e pathabo 


    return (
        <div>
            <form onSubmit={handleJobApply}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Page details</legend>

                    <label className="label">Linkedin Link</label>
                    <input type="url" name='linkedin' className="input" placeholder="linkedin link" />

                    <label className="label">Github Link</label>
                    <input type="url" name='github' className="input" placeholder="github link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="resume link" />

                    <input type="submit" value="Apply now" />
                </fieldset>


            </form>
        </div>
    );
};

export default JobApply;