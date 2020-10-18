<template>
    <section id="contact" class="contact-wrapper">
        <div class="contact">
            <div class="headline" v-if="!success && !error">
                <h1>{{content[content.current].contact.title}}</h1>
                <p>{{content[content.current].contact.subtitle}}</p>
            </div>
            <div class="content" v-if="!success && !error">
                <label for="name">{{content[content.current].contact.name}}</label>
                <input id="name" @mouseover="$hideCursor" @mouseleave="$showCursor" v-model="name" name="name" type="text" :class="nameInvalid && 'invalidInput'" placeholder="Richard Hendrix">
                <label for="email">{{content[content.current].contact.email}}</label>
                <input id="email" @mouseover="$hideCursor" @mouseleave="$showCursor" v-model="email" name="email" type="email" :class="emailInvalid && 'invalidInput'" placeholder="richard@piedpiper.com">
                <label for="message">{{content[content.current].contact.message}}</label>
                <textarea id="message" @mouseover="$hideCursor" @mouseleave="$showCursor" v-model="message" name="message" :class="messageInvalid && 'invalidInput'" :placeholder="content[content.current].contact.messagePlaceholder" />
                <div class="actions">
                    <PrimaryBtn class="submit" @click.native="submitMessage">{{content[content.current].contact.reachOut}}</PrimaryBtn>
                    <p>{{content[content.current].contact.orEmail}} <a @mouseover="$hideCursor" @mouseleave="$showCursor" class="link" href="mailto:hello@mxis.ch" target="_blank">hello@mxis.ch</a></p>
                </div>
            </div>
            <p v-else-if="success" class="message success">{{content[content.current].contact.success}}</p>
            <p v-else-if="error" class="message error">{{content[content.current].contact.error}}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1487.052" height="945.291" viewBox="0 0 1487.052 945.291"><path class="bg-svg" d="M79.536-35.751c63.123-227.713,474.257,1.326,779.981,17.178s372.428-129.657,548.918-81.012,191.5,258.236,34.818,530.979-610.771,459.166-951.7,342.38S16.413,191.961,79.536-35.751Z" transform="translate(-64.431 136.044)"/></svg>
    </section>
</template>

<script>
    import PrimaryBtn from '@/components/v2/Button'

    export default {
        name: 'Contact',
        data: function(){
            return{
                nameInvalid: false,
                emailInvalid: false,
                messageInvalid: false
            }
        },
        components: {
            PrimaryBtn
        },
        computed: {
            content: function () {
                return this.$store.state.content;
            },
            name:{
                get: function(){ 
                    return this.$store.state.contact.name; 
                }, 
                set: function(nameNew){ 
                    this.$store.dispatch('changeContactName', nameNew); 
                }
            },
            email:{
                get: function(){ 
                    return this.$store.state.contact.email; 
                }, 
                set: function(emailNew){ 
                    this.$store.dispatch('changeContactEmail', emailNew); 
                }
            },
            message:{
                get: function(){ 
                    return this.$store.state.contact.message; 
                }, 
                set: function(messageNew){ 
                    this.$store.dispatch('changeContactMessage', messageNew); 
                }
            },
            success: {
                get: function () {
                    return this.$store.state.contact.success;
                },
            },
            error: {
                get: function () {
                    return this.$store.state.contact.error;
                },
            },
        },
        methods: {
            submitMessage: function (){
                if(this.name.length < 1){
                    this.nameInvalid = true;
                }else{
                    this.nameInvalid = false;
                }
                if(this.email.length < 1 && !this.validEmail(this.email)){
                    this.emailInvalid = true;
                }else{
                    this.emailInvalid = false;
                }
                if(this.message.length < 1){
                    this.messageInvalid = true;
                }else{
                    this.messageInvalid = false;
                }
                if(!this.messageInvalid && !this.emailInvalid && !this.nameInvalid){
                    this.$store.dispatch("submitMessage", {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                }
            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<style scoped>
    .contact-wrapper {
        position: relative;
    }

    .contact-wrapper svg{
        position: absolute;
        z-index: 0;
        top: -5rem;
        left: 50%;
        transform: translate(-50%);
    }

    .contact {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        margin-bottom: 4rem;
        padding: 2rem;
        background: var(--background);
        box-shadow: 9px 9px 44px -25px rgba(0,0,0,0.75);
        border-radius: 15px;
        max-width: 1000px;
        width: 85%;
    }

    .headline{
        text-align: center;
    }

    .headline h1{
        margin-top: 0rem;
        margin-bottom: 1rem;
    }

    .headline p{
        color: var(--font-light);
        margin-bottom: 2rem;
    }

    .content{
        max-width: 450px;
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .content a{
        color: var(--primary);
        text-decoration: none;
    }

    .content input,
    .content textarea{
        display: block;
        background: var(--background-light);
        color: var(--font);
        font-size: 1rem;
        border-radius: 10px;
        border: 0;
        outline: 0;
        padding: 12px 14px;
        margin-top: 5px;
        margin-bottom: 15px;
    }

    .content textarea{
        height: 100px;
    }

    .content input:invalid,
    .content textarea:invalid{
        border: 1px solid var(--red) !important;
        padding: 11px 13px !important;
    }

    .invalidInput{
        border: 1px solid var(--red) !important;
        padding: 11px 13px !important;
    }

    .actions{
        text-align: center;
    }

    .submit{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .message{
        text-align: center;
    }

    .success{
        color: var(--primary);
        font-weight: 700;
    }
    
    .error{
        color: var(--red);
        font-weight: 700;
    }

    .bg-svg{
        fill:var(--primary-light);
    }
</style>