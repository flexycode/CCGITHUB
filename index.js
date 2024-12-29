import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const jsonfile = require('jsonfile');
const path = "./data.json";
const date = moment().subtract(1,'d').format();

const data = {
    date: date,
};

jsonfile.write(path, data,() =>{

} );

simpleGit().add([path]).commit(date,{'--date': date}).push();


