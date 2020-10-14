

export default function (context) {

    if (! context.$auth.user.is_admin){
      context.redirect({name : 'index'})
    }
}
