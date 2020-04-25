<template>
    <div class="timeline">
        <ul>
            <li>
                <div class="timeline__content">
                    <h3>first entry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum. 
                        Id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed. Interdum velit euismod in pellentesque
                        massa placerat duis. Id diam maecenas ultricies mi. Pretium nibh ipsum consequat nisl vel pretium. 
                        Enim diam vulputate ut pharetra 
                        sit amet aliquam id diam. Arcu felis bibendum ut tristique et. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>January 2018</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>first entry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum. 
                        Id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed. Interdum velit euismod in pellentesque
                        massa placerat duis. Id diam maecenas ultricies mi. Pretium nibh ipsum consequat nisl vel pretium. 
                        Enim diam vulputate ut pharetra 
                        sit amet aliquam id diam. Arcu felis bibendum ut tristique et. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>January 2018</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>first entry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum. 
                        Id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed. Interdum velit euismod in pellentesque
                        massa placerat duis. Id diam maecenas ultricies mi. Pretium nibh ipsum consequat nisl vel pretium. 
                        Enim diam vulputate ut pharetra 
                        sit amet aliquam id diam. Arcu felis bibendum ut tristique et. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>January 2018</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>first entry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum. 
                        Id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed. Interdum velit euismod in pellentesque
                        massa placerat duis. Id diam maecenas ultricies mi. Pretium nibh ipsum consequat nisl vel pretium. 
                        Enim diam vulputate ut pharetra 
                        sit amet aliquam id diam. Arcu felis bibendum ut tristique et. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>January 2018</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>first entry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum. 
                        Id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed. Interdum velit euismod in pellentesque
                        massa placerat duis. Id diam maecenas ultricies mi. Pretium nibh ipsum consequat nisl vel pretium. 
                        Enim diam vulputate ut pharetra 
                        sit amet aliquam id diam. Arcu felis bibendum ut tristique et. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>January 2018</h4>
                </div>
            </li>
             <li>
                <div class="timeline__content">
                    <h3>first entry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse platea.
                        Ornare lectus sit amet est placerat in egestas. Sem fringilla ut morbi tincidunt augue interdum. 
                        Id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed. Interdum velit euismod in pellentesque
                        massa placerat duis. Id diam maecenas ultricies mi. Pretium nibh ipsum consequat nisl vel pretium. 
                        Enim diam vulputate ut pharetra 
                        sit amet aliquam id diam. Arcu felis bibendum ut tristique et. Vel eros donec ac odio tempor.
                    </p>
                </div>
                <div class="timeline__time">
                    <h4>January 2018</h4>
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
    &:before {
        content: '';
        position: absolute;
        left: 50%;
        width: 2px;
        height: 100%;
        background: $primary;
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
            &:nth-child(odd) {
                float: left;
                text-align: right;
            }
            &:nth-child(even) {
                float: right;
                text-align: left;
            }
        }
    }
    &__clear-both {
        clear: both;
    }
}

</style>
