//Update page. Part of core web API functionality
//Lists current events by the user
//Patch and delete mappings without reloading page
export default function Update() {
    return (
        <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to</div>
                <div class="text-2">The<span> Update Page</span></div>
                <div class="text-3">To do:
                <ol>
                    <li>List current events by user</li>
                    <li>Patch mapping functionality (show updates without reloading page)</li>
                    <li>Delete mapping functionality (taking events away without reloading page)</li>
                </ol>
                </div>
            </div>
        </div>
    </section> 
    );
  }