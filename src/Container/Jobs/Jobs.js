import React, {Component} from "react";
import classes from './Jobs.module.css';
import Design from "../../Components/Layout/Jobs Design/Design";
class Jobs extends Component{
    
    state={
        jobs:{
            seniorFrontDev: {
                compnay: 'Photosnap',
                jobTitle: 'Senior Frontend Developer',
                jobType: 'Full Time',
                location: 'USA only',
                jobRequirements:['Frontend','Senior','HTML','CSS','Javascript'],
                display: true,
                img: 'eyecam-co.svg'
            },
            fullStackDev: {
                compnay: 'Manage',
                jobTitle: 'Full Stack Developer',
                jobType: 'Part Time',
                location: 'Remote',
                img:'faceit.svg',
                jobRequirements:['Fullstack','Midweight', 'Python','React'],
                display: true,
            },
            juniorFrontDeveloper: {
                compnay: 'Account',
                jobTitle: 'Junior Frontend Developer',
                jobType: 'Part Time',
                location: 'USA only',
                img: 'icon-remove.svg',
                jobRequirements:['Frontend','Junior','React','SASS','Javascript'],
                display: true,
            },
            juniorFrontDev: {
                compnay: 'MyHome',
                jobTitle: 'Junior Frontend Developer',
                jobType: 'Contract',
                location: 'USA only',
                img:'insure.svg',
                jobRequirements:['Frontend','Junior','CSS','Javascript'],
                display: true,
            },
            softwareEnginner: {
                compnay: 'Loop Studios',
                jobTitle: 'Software Enginner',
                jobType: 'Full Time',
                location: 'WorldWide',
                img:'loop-studios.svg',
                jobRequirements:['Fullstack','Mideweight','SaSS','Javascript','Ruby'],
                display: true,
            },
            juniorBackDev: {
                compnay: 'FaceIt',
                jobTitle: 'Junior Backend Developer',
                jobType: 'Full Time',
                location: 'UK only',
                img:'manage.svg',
                jobRequirements:['Backend','Junior','Ruby','RoR'],
                display: true,
            },
            juniorDev: {
                compnay: 'Shortly',
                jobTitle: 'Junior Developer',
                jobType: 'Full Time',
                location: 'WorldWide',
                img:'myhome.svg',
                jobRequirements:['Frontend','Junior','HTML','SASS','Javascript'],
                display: true,
            },
            juniorFrontendDev: {
                compnay: 'Insure',
                jobTitle: 'Junior Frontend Developer',
                jobType: 'Full Time',
                location: 'USA only',
                img:'photosnap.svg',
                jobRequirements:['Frontend','Junior','Bue','SASS','Javascript'],
                display: true,
            },
            fullStackEnginner: {
                compnay: 'Eyecam Co.',
                jobTitle: 'Full Stack Enginner',
                jobType: 'Full Time',
                location: 'WorldWide',
                img:'shortly.svg',
                jobRequirements:['Fullstack','Midweight','Javascript','Django','Python'],
                display: true,
            },
            frontendDev: {
                compnay: 'The Air Filter Company',
                jobTitle: 'Front-end Dev',
                jobType: 'Part Time',
                location: 'WorldWide',
                img:'the-air-filter-company.svg',
                jobRequirements:['Frontend','Junior','React', 'SASS','Javascript'],
                display: true,
            },
        },
        search: false,
        searchValue: []
    }
    
    searchHandler = (event) =>{
      let jobs = this.state.jobs;
      let updatedCopy = {};
      let searchValue = this.state.searchValue;
      searchValue.push(event.target.innerHTML);
      for(let key in jobs){
         if(!searchValue.every(i=> jobs[key].jobRequirements.includes(i))){
           jobs[key].display = false   
         }
         else{
             jobs[key].display = true
         }
      }
      this.setState({jobs:jobs,
        searchValue: searchValue});
}

remover = (event) =>{
    let jobs = this.state.jobs;
    let searchValue = this.state.searchValue;
    let index = searchValue.indexOf(event.target.innerHTML);
    searchValue.splice(index,1);
    for(let key in jobs){
        if(!searchValue.every(i=> jobs[key].jobRequirements.includes(i))){
          jobs[key].display = false   
        }
        else{
            jobs[key].display = true;
        }
     }
     console.log(jobs);
    this.setState({jobs:jobs,searchValue: searchValue});
    
}

    render(){

        let jobsDetails = null;
        let jobs = [];
        let searchFilter=null;
        if(this.state.searchValue){
         searchFilter =   this.state.searchValue.map(value=>{
                return <button className={classes.btn} onClick={this.remover}>{value}</button>
            })
        }

        for(let key in this.state.jobs){
            jobs.push({
                key: this.state.jobs[key].compnay,
                config: this.state.jobs[key]
            })
        }

       jobsDetails = jobs.map(job=>{
           return <Design compnay = {job.config.compnay}
            jobTitle = {job.config.jobTitle}
            jobType = {job.config.jobType}
            location = {job.config.location}
            image = {job.config.img}
            jobRequirements = {job.config.jobRequirements}
            clicked = {this.searchHandler}
            display = {job.config.display}
            />
        })
        return(
           <div className={classes.main}>
               <div className={classes.header}></div>
               {this.state.searchValue.join('')?
                   <div className={classes.filter}>
                 {searchFilter}
               </div>:null}
           {jobsDetails}
            </div>
        )
    }
}

export default Jobs;