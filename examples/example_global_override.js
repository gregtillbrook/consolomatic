/*
  To set colored console globally use overrideGlobal. It's recommended to put that call in its own import 
  (e.g. see project_setup.js) to avoid any cases of console commands being called before the overrideGlobal
  is made.
*/
import './example_global_override/project_setup';

console.warn('console is now overwritten in all files');