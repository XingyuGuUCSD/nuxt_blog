export default function(context){
    console.log('middleware check-auth');
    context.state.dispatch('initAuth');
}