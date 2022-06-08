export default function Cuerpo(){
    return (
        <>            
            <div className="App" >
                <header className="App-header">
                    {/* <img src='./assets/images/logo.svg' className="App-logo" alt="logo" /> */}
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' className="App-logo" alt="logo" />
                    <p>Fede</p>                
                    <input type="mail" placeholder="ingrese el mail" onClick={ () => console.log('fede') } />
                    <p>
                        Edit <code>App.jsx</code> and save to test HMR updates.
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        {' | '}
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Docs
                        </a>
                    </p>
                </header>
            </div>
        </>
    )
}