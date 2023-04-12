const getAppliedJobs = () => {
    let appliedJobs = {};

    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

const setAppliedJobs = (id) => {
    let appliedJobs = getAppliedJobs();
    const job = appliedJobs[id];
    if (!job) {
        appliedJobs[id] = id;

    }
    else {
        alert("Already Added")
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

export {
    getAppliedJobs,
    setAppliedJobs
}