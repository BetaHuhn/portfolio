import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogEntries from '../statics/blog.js';

const blogRoutes = [];

Object.keys(BlogEntries).forEach( section => {
  BlogEntries[section].forEach( child => {
    blogRoutes.push({
      path: `/${section}/${child.id}`,
      name: child.id,
      props: {
        section: section,
        blog: child
      },
      meta: {
        title: child.en.title + ' - Maximilian Schiller',
        scrollToTop: true
      },
      component: () => import('@/components/Blog.vue'),
    })
  })
})

Object.keys(BlogEntries).forEach( section => {
  blogRoutes.push({
    path: `/${section}`,
    name: section,
    props: {
      section: section
    },
    meta: {
      title: section.charAt(0).toUpperCase() + section.slice(1) + ' - Maximilian Schiller',
      scrollToTop: true
    },
    component: () => import('@/views/Blog.vue'),
  })
})
 
  /* const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`@/markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('@/views/Blog.vue'),
    children
  } */


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home Page - Maximilian Schiller',
      scrollToTop: true
    },
    component: () => import("@/views/Home")
  },
  {
    path: '/gallery',
    alias: '/galerie',
    name: 'Gallery',
    meta: {
      title: 'Gallery - Maximilian Schiller',
      scrollToTop: true
    },
    component: () => import("@/views/Gallery")
  },
  {
    path: '/inprint',
    alias: '/impressum',
    name: 'Inprint',
    meta: {
      title: 'Inprint - Maximilian Schiller',
      scrollToTop: true
    },
    component: () => import("@/views/Inprint")
  },
  ...blogRoutes,
  {
    path: '*',
    name: '404',
    meta: {
      title: '404 - Maximilian Schiller',
      scrollToTop: true
    },
    component: () => import("@/views/404.vue")
  },
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior 
})

// Handle Meta Tags on route change
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
