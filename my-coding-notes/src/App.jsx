import './App.css';

function app() {
  return (
    <div className="text-xl text-center flex flex-col items-center justify-center h-screen border-2 border-black-200">
      <h1>My Coding Notes</h1>
      <p>My notes on coding</p>
      <p>what i've learned today: <b>css module and global css</b></p>
      <br /> <p>css modules ay ginagamit lang pag gumagawa ng large apps, nilalagyan nya ng hash yung classname para di magkaroon ng problema sa kapareho nitong classname</p>
      <br /> <p>di tulad ng global css, pag naka tailwind ka di mo na kailangan mag css module, dahil wala naman itong classname</p>
      <br /> <p>natutunan ko rin yung pag import ng css pag global css yung gamit mo<b>"import '/(cssname)';"</b> di mo na kailangan mag
       <b>"import app from './App.css'"</b></p>
    </div>
  );
}
export default app;