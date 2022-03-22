import React from 'react';
import GlobalLogin from '../page elements/GlobalLogin';
//Home Page
//Adding a welcome message with user name and photo
export class Home extends React.Component {
    render()
    {
        if (GlobalLogin == "")
        {
            return (
            <section class="home" id="home">  
            <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to</div>
                <div class="text-2">Team<span>Up</span></div>
                <div class="text-3">A sport application...</div>
                <a href="/about">Learn More</a>
            </div>
        </div>
        </section>
            )
        }
        else if (GlobalLogin !== "")
        {
            return (
            <section class="loggedhome" id="loggedhome">  
            <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to</div>
                <div class="text-2">Team<span>Up</span></div>
                <div class="text-3">A sport application...</div>
                <a href="/about">Learn More</a>
            </div>
        </div>
             <div class="profile">Hello<span>&nbsp;{GlobalLogin}</span>!</div>
            </section>
            )
        }
    }
}
