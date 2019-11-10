export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // student
      { path: '/', redirect: '/student/proposal/select_topic' },
      { path: '/student', redirect: '/student/proposal/select_topic' },
      {
        path: '/student/proposal',
        name: 'proposal',
        icon: 'form',
        routes: [
          {
            path: '/student/proposal/select_topic',
            name: 'select_topic',
            component: './Student/Proposal/TopicSelection',
          },
          {
            path: '/student/proposal/apply_topic',
            name: 'apply_topic',
            component: './Student/Proposal/TopicApply',
          },
          {
            path: '/student/proposal/report',
            name: 'report',
            component: './Student/Proposal/TopicReport',
          },
        ],
      },
      {
        path: '/student/guidance',
        name: 'guidance',
        icon: 'form',
        routes: [
          {
            path: '/student/guidance/submit_guidance',
            name: 'submit_guidance',
            component: './Student/Guidance/SubmitGuidance',
          },
          {
            path: '/student/guidance/guidance_history',
            name: 'guidance_history',
            component: './Student/Guidance/GuidanceHistory',
          },
          {
            path: '/student/guidance/submit_inspection',
            name: 'submit_inspection',
            component: './Student/Guidance/SubmitInspection',
          },
        ],
      },
      {
        path: '/student/defense',
        name: 'defense',
        icon: 'form',
        routes: [
          {
            path: '/student/defense/submit_thesis',
            name: 'submit_thesis',
            component: './Student/Defense/SubmitThesis',
          },
          {
            path: '/student/defense/schedule',
            name: 'schedule',
            component: './Student/Defense/Schedule',
          },
          {
            path: '/student/defense/score',
            name: 'defense_score',
            component: './Student/Defense/DefenseScore',
          },
        ],
      },
      {
        // demo
        path: '/demo',
        name: 'demo',
        routes: [
          // dashboard
          { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
          {
            path: '/demo/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                path: '/demo/dashboard/analysis',
                name: 'analysis',
                component: './Dashboard/Analysis',
              },
              {
                path: '/demo/dashboard/monitor',
                name: 'monitor',
                component: './Dashboard/Monitor',
              },
              {
                path: '/demo/dashboard/workplace',
                name: 'workplace',
                component: './Dashboard/Workplace',
              },
            ],
          },
          // forms
          {
            path: '/demo/form',
            icon: 'form',
            name: 'form',
            routes: [
              {
                path: '/demo/form/basic-form',
                name: 'basicform',
                component: './Forms/BasicForm',
              },
              {
                path: '/demo/form/step-form',
                name: 'stepform',
                component: './Forms/StepForm',
                hideChildrenInMenu: true,
                routes: [
                  {
                    path: '/demo/form/step-form',
                    redirect: '/form/step-form/info',
                  },
                  {
                    path: '/demo/form/step-form/info',
                    name: 'info',
                    component: './Forms/StepForm/Step1',
                  },
                  {
                    path: '/demo/form/step-form/confirm',
                    name: 'confirm',
                    component: './Forms/StepForm/Step2',
                  },
                  {
                    path: '/demo/form/step-form/result',
                    name: 'result',
                    component: './Forms/StepForm/Step3',
                  },
                ],
              },
              {
                path: '/demo/form/advanced-form',
                name: 'advancedform',
                authority: ['admin'],
                component: './Forms/AdvancedForm',
              },
            ],
          },
          // list
          {
            path: '/demo/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/demo/list/table-list',
                name: 'searchtable',
                component: './List/TableList',
              },
              {
                path: '/demo/list/basic-list',
                name: 'basiclist',
                component: './List/BasicList',
              },
              {
                path: '/demo/list/card-list',
                name: 'cardlist',
                component: './List/CardList',
              },
              {
                path: '/demo/list/search',
                name: 'searchlist',
                component: './List/List',
                routes: [
                  {
                    path: '/demo/list/search',
                    redirect: '/list/search/articles',
                  },
                  {
                    path: '/demo/list/search/articles',
                    name: 'articles',
                    component: './List/Articles',
                  },
                  {
                    path: '/demo/list/search/projects',
                    name: 'projects',
                    component: './List/Projects',
                  },
                  {
                    path: '/demo/list/search/applications',
                    name: 'applications',
                    component: './List/Applications',
                  },
                ],
              },
            ],
          },
          {
            path: '/demo/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              // profile
              {
                path: '/demo/profile/basic',
                name: 'basic',
                component: './Profile/BasicProfile',
              },
              {
                path: '/demo/profile/basic/:id',
                hideInMenu: true,
                component: './Profile/BasicProfile',
              },
              {
                path: '/demo/profile/advanced',
                name: 'advanced',
                authority: ['admin'],
                component: './Profile/AdvancedProfile',
              },
            ],
          },
          {
            name: 'result',
            icon: 'check-circle-o',
            path: '/demo/result',
            routes: [
              // result
              {
                path: '/demo/result/success',
                name: 'success',
                component: './Result/Success',
              },
              { path: '/demo/result/fail', name: 'fail', component: './Result/Error' },
            ],
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/demo/exception',
            routes: [
              // exception
              {
                path: '/demo/exception/403',
                name: 'not-permission',
                component: './Exception/403',
              },
              {
                path: '/demo/exception/404',
                name: 'not-find',
                component: './Exception/404',
              },
              {
                path: '/demo/exception/500',
                name: 'server-error',
                component: './Exception/500',
              },
              {
                path: '/demo/exception/trigger',
                name: 'trigger',
                hideInMenu: true,
                component: './Exception/TriggerException',
              },
            ],
          },
          {
            name: 'account',
            icon: 'user',
            path: '/demo/account',
            routes: [
              {
                path: '/demo/account/center',
                name: 'center',
                component: './Account/Center/Center',
                routes: [
                  {
                    path: '/demo/account/center',
                    redirect: '/account/center/articles',
                  },
                  {
                    path: '/demo/account/center/articles',
                    component: './Account/Center/Articles',
                  },
                  {
                    path: '/demo/account/center/applications',
                    component: './Account/Center/Applications',
                  },
                  {
                    path: '/demo/account/center/projects',
                    component: './Account/Center/Projects',
                  },
                ],
              },
              {
                path: '/demo/account/settings',
                name: 'settings',
                component: './Account/Settings/Info',
                routes: [
                  {
                    path: '/demo/account/settings',
                    redirect: '/account/settings/base',
                  },
                  {
                    path: '/demo/account/settings/base',
                    component: './Account/Settings/BaseView',
                  },
                  {
                    path: '/demo/account/settings/security',
                    component: './Account/Settings/SecurityView',
                  },
                  {
                    path: '/demo/account/settings/binding',
                    component: './Account/Settings/BindingView',
                  },
                  {
                    path: '/demo/account/settings/notification',
                    component: './Account/Settings/NotificationView',
                  },
                ],
              },
            ],
          },
          //  editor
          {
            name: 'editor',
            icon: 'highlight',
            path: '/demo/editor',
            routes: [
              {
                path: '/demo/editor/flow',
                name: 'flow',
                component: './Editor/GGEditor/Flow',
              },
              {
                path: '/demo/editor/mind',
                name: 'mind',
                component: './Editor/GGEditor/Mind',
              },
              {
                path: '/demo/editor/koni',
                name: 'koni',
                component: './Editor/GGEditor/Koni',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
