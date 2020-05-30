import {LeaderBoard} from './Pages/LeaderBoard/LeaderBoard';
import {TasksList} from "./Pages/Tasks/TasksList";

const routes = [
    {path: '/', exact: true, name: 'Home'},
    {path: '/leaderboard', name: 'Dashboard', component: LeaderBoard},
    {path: '/tasks-list', name: 'Users', component: TasksList}
];

export default routes;