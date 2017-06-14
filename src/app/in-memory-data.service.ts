import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let teams = [
     {id:1,teamname:"Bangladesh",captain:"Mortaza",fullname:"Delhi Daredevils"},
{id:2,teamname:"England",captain:"Morgan",fullname:"Gujarat Lions"},
{id:3,teamname:"Australia",captain:"Smith",fullname:"Mumbai Indians"},
{id:4,teamname:"South Africa",captain:"ABD",fullname:"Sun Risers Hyderabad"},
{id:5,teamname:"New Zealand",captain:"Williamson",fullname:"Rising Pune Supergaint"},
{id:6,teamname:"India",captain:"Kohli",fullname:"Kolkata Knight Riders"},
{id:7,teamname:"Sri Lanka",captain:"Mathews",fullname:"Royal Challengers Banglore"},
{id:8,teamname:"Pakistan",captain:"Aamir",fullname:"Kings XI Punjab"}
];
    return {teams};
  }
}