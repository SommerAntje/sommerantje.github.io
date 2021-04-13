<template>
    <div class="timeline container">
        <ul>
            <li>
                <div class="timeline__content">
                    <h3>dpa-IT Services GmbH</h3>
                    <p>
                        At the moment I am working as Front-End Engineer at the dpa-IT Services GmbH
                        where I am diving into the magical world of Vue.js, Typescript, TailwindCSS
                        and sharp my testing skills in vue-testing-library.<br />
                        <span class="highlight">#vue.js</span>
                        <span class="highlight">#Tailwind CSS</span> <br />
                        <span class="highlight">#Typescript</span>
                        <span class="highlight">#GraphQL</span>
                        <span class="highlight">#vue-testing-library</span>
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>May 2020 - now</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>dreamIT GmbH</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum.
                        <br />
                        <span class="highlight">#vue.js</span>
                        <span class="highlight">#vuetify</span>
                        <span class="highlight">#Micro Frontends</span><br />
                        <span class="highlight">#GraphQL</span>
                        <span class="highlight">#vue-testing-library</span>
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>Nov' 2018 - Apr' 2020</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>avarto eCommerce Verwaltungsgesellschaft mbH</h3>
                    <p>
                        Software Front-End Engineer | Salesforce Commerce Cloud
                        for  Uniqlo, Gerry Weber, Tommy Hilfiger.
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum.
                        <br />
                        <span class="highlight">#Salesforce Commerce Cloud</span>
                        <span class="highlight">#jQuery #ES6</span><br />
                        <span class="highlight">#E-Commerce</span>
                        <span class="highlight">#HTML5</span>
                        <span class="highlight">#CSS3</span>
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>May' 2015 - Oct' 2018</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>ePages GmbH</h3>
                    <p>
                        Software Front-End Engineer | E-commerce, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum.
                        <br />
                        <span class="highlight">#Bootstrap</span>
                        <span class="highlight">#jQuery</span>
                        <span class="highlight">#ePages Template Framework</span><br />
                        <span class="highlight">#CSS3</span>
                        <span class="highlight">#HTML5</span>
                        <span class="highlight">#E-Commerce</span>
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>Oct' 2013 - Apr' 2015</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>Ministry Group GmbH</h3>
                    <p>
                        Trainee in web development with focus on frontend, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum.
                        <br />
                        <span class="highlight">#Bootstrap</span>
                        <span class="highlight">#jQuery</span>
                        <span class="highlight">#PHP</span><br />
                        <span class="highlight">#HTML5</span>
                        <span class="highlight">#CSS3</span>
                        <span class="highlight">#E-Commerce</span>
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>Feb' 2013 - Aug' 2013</h4>
                </div>
            </li>
            <div class="timeline__clear-both"></div>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.timeline {
    position: relative;
    margin: 50px auto;
    padding: 40px 0;
    width: 1000px;
    box-sizing: border-box;
    
    @media (max-width: $screen-sm) {
      width: 100%;
      padding-bottom: 0;
    }

    @media (max-width: $screen-md) {
      width: 100%;
    }

    &:before {
        content: '';
        position: absolute;
        left: 50%;
        width: 2px;
        height: 100%;
        background: $grey-3;
        @media (max-width: $screen-sm) {
            left: 20px;
            top: 0;
            height: 98%;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        li {
            line-height: normal;
            position: relative;
            width: 50%;
            padding: 20px 40px;
            box-sizing: border-box;
            @media (max-width: $screen-sm) {
                padding: 20px 0;
            }

            &:nth-child(odd) {
                float: left;
                text-align: right;
                clear: both;

                @media (max-width: $screen-sm) {
                    width: 100%;
                    text-align: left;
                    padding-left: 50px;
                    padding-left: 2em;
                }

                &:before {
                    content: '';
                    position: absolute;
                    top: 24px;
                    right: -6px;
                    width: 10px;
                    height: 10px;
                    background: rgba(53,168,224,1);
                    border-radius: 50%;
                    box-shadow: 0 0 0 3px rgba(53,168,224,0.4);
                    @media (max-width: $screen-sm) {
                        top: -28px;
                        left: -8px;
                    }
                }
                .timeline__time {
                    position: absolute;
                    top: 12px;
                    right: -190px;
                    margin: 0;
                    padding: 8px 16px;
                    background: rgba(53,168,224,1);
                    box-shadow: 0 0 0 3px rgba(53,168,224,0.4);
                    color: #fff;
                    @media (max-width: $screen-sm) {
                        top: -40px;
                        left: 25px;
                        right: inherit;
                    }
                }
            }
            &:nth-child(even) {
                float: right;
                text-align: left;
                clear:both;

                @media (max-width: $screen-sm) {
                    width: 100%;
                    text-align: left;
                    padding-left: 2em;
                }

                &:before {
                    content: '';
                    position: absolute;
                    top: 24px;
                    left: -4px;
                    width: 10px;
                    height: 10px;
                    background: rgba(53,168,224,1);
                    border-radius: 50%;
                    box-shadow: 0 0 0 3px rgba(53,168,224,0.4);
                    
                    @media (max-width: $screen-sm) {
                        top: -28px;
                        left: -8px;
                    }
                }
                .timeline__time {
                    position: absolute;
                    top: 12px;
                    left: -190px;
                    margin: 0;
                    padding: 8px 16px;
                    background: rgba(53,168,224,1);
                    box-shadow: 0 0 0 3px rgba(53,168,224,0.4);
                    color: #fff;
                    @media (max-width: $screen-sm) {
                        top: -40px;
                        left: 25px;
                        right: inherit;
                    }
                }
            }
        }
    }
    &__clear-both {
        clear: both;
    }
    &__time {
        h4 {
            padding: 0;
            margin: 0;
            font-size: 1.25rem;
            font-family: 'Raleway ExtraLight', Arial, sans-serif;
        }
    }
    &__content {
        padding-bottom: 20px;
        h3 {
            margin: 0;
            padding: 0 0 15px 0;
            font-family: 'Raleway ExtraLight', Arial, sans-serif;
            color: rgba(53,168,224,1);
            font-size: 1.75rem;
        }
        .highlight {
            font-family: 'Raleway ExtraLight', Arial, sans-serif;
            color: rgba(53,168,224,1);
            line-height: 1.5;
            letter-spacing: -.1px;
        }
        p {
            margin: 10px 0 0;
            padding: 0;
            line-height: 1.5;
            letter-spacing: -.1px;
        }
    }
}

</style>
