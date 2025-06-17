import { o as o$1 } from './chunks/false-D06zNf0R.js';
import { s, a as safe_equals, o, u, n, f, r as r$1, e as equals, l, b as a$1, c as run_all, t, d as readable, w as writable } from './chunks/index-Bt2GOrJO.js';
import { s as s$1, a, r, b as render, i, p as push$1, c as setContext, d as pop$1 } from './chunks/index2-BqrdGpFb.js';
import { c, i as i$1, d, l as l$1, a as decode_pathname, b as decode_params, n as normalize_path, e as disable_search, r as resolve, m as make_trackable } from './chunks/exports-DFDLMVzA.js';
import './chunks/attributes-DxuHxdEJ.js';

var e$1=Object.defineProperty,__name$1=(t,n)=>e$1(t,"name",{value:n,configurable:true});let w="",k=w;const C$1="_app",$={base:w,assets:k};function override(e){w=e.base,k=e.assets;}function reset(){w=$.base,k=$.assets;}function set_assets(e){k=$.assets=e;}__name$1(override,"override"),__name$1(reset,"reset"),__name$1(set_assets,"set_assets");let S={},q={};function set_private_env(e){}function set_public_env(e){S=e;}function set_safe_public_env(e){q=e;}__name$1(set_private_env,"set_private_env"),__name$1(set_public_env,"set_public_env"),__name$1(set_safe_public_env,"set_safe_public_env");const z$1=32,E=64,O=256,R=512,P=1024,N$1=2048,j=4096,M$1=8192,F$1=16384,T=1<<21,D$1=Symbol("$state"),I$1=Symbol("legacy props");function effect_update_depth_exceeded(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hydration_failed(){throw new Error("https://svelte.dev/e/hydration_failed")}function state_descriptors_fixed(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function state_prototype_fixed(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function state_unsafe_mutation(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}__name$1(effect_update_depth_exceeded,"effect_update_depth_exceeded"),__name$1(hydration_failed,"hydration_failed"),__name$1(state_descriptors_fixed,"state_descriptors_fixed"),__name$1(state_prototype_fixed,"state_prototype_fixed"),__name$1(state_unsafe_mutation,"state_unsafe_mutation");let L$1=null;function set_component_context(e){L$1=e;}function push(e,t=false,n){var r=L$1={p:L$1,c:null,d:false,e:null,m:false,s:e,x:null,l:null};teardown((()=>{r.d=true;}));}function pop(e){const t=L$1;if(null!==t){const e=t.e;if(null!==e){var n=ne$1,r=ee$1;t.e=null;try{for(var s=0;s<e.length;s++){var o=e[s];set_active_effect(o.effect),set_active_reaction(o.reaction),effect(o.fn);}}finally{set_active_effect(n),set_active_reaction(r);}}L$1=t.p,t.m=true;}return {}}function is_runes(){return  true}function proxy(e){if("object"!=typeof e||null===e||D$1 in e)return e;const t=l(e);if(t!==o&&t!==u)return e;var i$1=new Map,l$1=a$1(e),c=state(0),f=ee$1,_=__name$1((e=>{var t=ee$1;set_active_reaction(f);var n=e();return set_active_reaction(t),n}),"with_parent");return l$1&&i$1.set("length",state(e.length)),new Proxy(e,{defineProperty:(e,t,n)=>("value"in n&&false!==n.configurable&&false!==n.enumerable&&false!==n.writable||state_descriptors_fixed(),_((()=>{var e=i$1.get(t);void 0===e?(e=state(n.value),i$1.set(t,e)):set(e,n.value,true);})),true),deleteProperty(e,t){var n=i$1.get(t);if(void 0===n){if(t in e){const e=_((()=>state(i)));i$1.set(t,e),update_version(c);}}else {if(l$1&&"string"==typeof t){var r=i$1.get("length"),s=Number(t);Number.isInteger(s)&&s<r.v&&set(r,s);}set(n,i),update_version(c);}return  true},get(t,n$1,r){if(n$1===D$1)return e;var o=i$1.get(n$1),a=n$1 in t;if(void 0!==o||a&&!n(t,n$1)?.writable||(o=_((()=>state(proxy(a?t[n$1]:i)))),i$1.set(n$1,o)),void 0!==o){var l=get(o);return l===i?void 0:l}return Reflect.get(t,n$1,r)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&"value"in n){var r=i$1.get(t);r&&(n.value=get(r));}else if(void 0===n){var s=i$1.get(t),o=s?.v;if(void 0!==s&&o!==i)return {enumerable:true,configurable:true,value:o,writable:true}}return n},has(e,t){if(t===D$1)return  true;var n$1=i$1.get(t),r=void 0!==n$1&&n$1.v!==i||Reflect.has(e,t);if((void 0!==n$1||null!==ne$1&&(!r||n(e,t)?.writable))&&(void 0===n$1&&(n$1=_((()=>state(r?proxy(e[t]):i))),i$1.set(t,n$1)),get(n$1)===i))return  false;return r},set(e,t,n$1,r){var o=i$1.get(t),a=t in e;if(l$1&&"length"===t)for(var f=n$1;f<o.v;f+=1){var u=i$1.get(f+"");void 0!==u?set(u,i):f in e&&(u=_((()=>state(i))),i$1.set(f+"",u));} void 0===o?a&&!n(e,t)?.writable||(o=_((()=>{var e=state(void 0);return set(e,proxy(n$1)),e})),i$1.set(t,o)):(a=o.v!==i,set(o,_((()=>proxy(n$1)))));var d=Reflect.getOwnPropertyDescriptor(e,t);if(d?.set&&d.set.call(r,n$1),!a){if(l$1&&"string"==typeof t){var v=i$1.get("length"),h=Number(t);Number.isInteger(h)&&h>=v.v&&set(v,h+1);}update_version(c);}return  true},ownKeys(e){get(c);var t=Reflect.ownKeys(e).filter((e=>{var t=i$1.get(e);return void 0===t||t.v!==i}));for(var[n,r]of i$1)r.v===i||n in e||t.push(n);return t},setPrototypeOf(){state_prototype_fixed();}})}function update_version(e,t=1){set(e,e.v+t);}function destroy_derived_effects(e){var t=e.effects;if(null!==t){e.effects=null;for(var n=0;n<t.length;n+=1)destroy_effect(t[n]);}}function get_derived_parent_effect(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t;t=t.parent;}return null}function execute_derived(e){var t,n=ne$1;set_active_effect(get_derived_parent_effect(e));try{destroy_derived_effects(e),t=update_reaction(e);}finally{set_active_effect(n);}return t}function update_derived(e){var t=execute_derived(e);(e.equals(t)||(e.v=t,e.wv=increment_write_version()),Y$1)||set_signal_status(e,!ce$1&&0===(e.f&O)||null===e.deps?P:j);}__name$1(set_component_context,"set_component_context"),__name$1(push,"push"),__name$1(pop,"pop"),__name$1(is_runes,"is_runes"),__name$1(proxy,"proxy"),__name$1(update_version,"update_version"),__name$1(destroy_derived_effects,"destroy_derived_effects"),__name$1(get_derived_parent_effect,"get_derived_parent_effect"),__name$1(execute_derived,"execute_derived"),__name$1(update_derived,"update_derived");const U$1=new Map;function source(e,t){return {f:0,v:e,reactions:null,equals:equals,rv:0,wv:0}}function state(e,t){const n=source(e);return push_reaction_value(n),n}function mutable_source(e,t=false,n=true){const r=source(e);return t||(r.equals=safe_equals),r}function set(e,t,n=false){return null!==ee$1&&!te$1&&18&ee$1.f&&!re$1?.includes(e)&&state_unsafe_mutation(),internal_set(e,n?proxy(t):t)}function internal_set(e,t){if(!e.equals(t)){var n=e.v;Y$1?U$1.set(e,t):U$1.set(e,n),e.v=t,2&e.f&&(0!==(e.f&N$1)&&execute_derived(e),set_signal_status(e,0===(e.f&O)?P:j)),e.wv=increment_write_version(),mark_reactions(e,N$1),null===ne$1||0===(ne$1.f&P)||96&ne$1.f||(null===ae$1?set_untracked_writes([e]):ae$1.push(e));}return t}function mark_reactions(e,t){var n=e.reactions;if(null!==n)for(var r=n.length,s=0;s<r;s++){var o=n[s],a=o.f;0===(a&N$1)&&(set_signal_status(o,t),1280&a&&(2&a?mark_reactions(o,j):schedule_effect(o)));}}function hydration_mismatch(e){console.warn("https://svelte.dev/e/hydration_mismatch");}__name$1(source,"source"),__name$1(state,"state"),__name$1(mutable_source,"mutable_source"),__name$1(set,"set"),__name$1(internal_set,"internal_set"),__name$1(mark_reactions,"mark_reactions"),__name$1(hydration_mismatch,"hydration_mismatch");let B$1,H$1=false;function set_hydrating(e){H$1=e;}function set_hydrate_node(e){if(null===e)throw hydration_mismatch(),a;return B$1=e}function hydrate_next(){return set_hydrate_node(get_next_sibling(B$1))}var K$1,W$1,A;function init_operations(){if(void 0===K$1){K$1=window;var e=Element.prototype,t=Node.prototype,n$1=Text.prototype;W$1=n(t,"firstChild").get,A=n(t,"nextSibling").get,f(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),f(n$1)&&(n$1.__t=void 0);}}function create_text(e=""){return document.createTextNode(e)}function get_first_child(e){return W$1.call(e)}function get_next_sibling(e){return A.call(e)}function clear_text_content(e){e.textContent="";}function push_effect(e,t){var n=t.last;null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e);}function create_effect(e,t,n,r=true){var s=ne$1,o={ctx:L$1,deps:null,nodes_start:null,nodes_end:null,f:e|N$1,first:null,fn:t,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(n)try{update_effect(o),o.f|=32768;}catch(i){throw destroy_effect(o),i}else null!==t&&schedule_effect(o);if(!(n&&null===o.deps&&null===o.first&&null===o.nodes_start&&null===o.teardown&&!(1048704&o.f))&&r&&(null!==s&&push_effect(o,s),null!==ee$1&&2&ee$1.f)){var a=ee$1;(a.effects??=[]).push(o);}return o}function teardown(e){const t=create_effect(8,null,false);return set_signal_status(t,P),t.teardown=e,t}function component_root(e){const t=create_effect(E,e,true);return (e={})=>new Promise((n=>{e.outro?pause_effect(t,(()=>{destroy_effect(t),n(void 0);})):(destroy_effect(t),n(void 0));}))}function effect(e){return create_effect(4,e,false)}function branch(e,t=true){return create_effect(40,e,true,t)}function execute_effect_teardown(e){var t=e.teardown;if(null!==t){const e=Y$1,n=ee$1;set_is_destroying_effect(true),set_active_reaction(null);try{t.call(null);}finally{set_is_destroying_effect(e),set_active_reaction(n);}}}function destroy_effect_children(e,t=false){var n=e.first;for(e.first=e.last=null;null!==n;){var r=n.next;0!==(n.f&E)?n.parent=null:destroy_effect(n,t),n=r;}}function destroy_block_effect_children(e){for(var t=e.first;null!==t;){var n=t.next;0===(t.f&z$1)&&destroy_effect(t),t=n;}}function destroy_effect(e,t=true){var n=false;(t||524288&e.f)&&null!==e.nodes_start&&null!==e.nodes_end&&(remove_effect_dom(e.nodes_start,e.nodes_end),n=true),destroy_effect_children(e,t&&!n),remove_reactions(e,0),set_signal_status(e,F$1);var r=e.transitions;if(null!==r)for(const o of r)o.stop();execute_effect_teardown(e);var s=e.parent;null!==s&&null!==s.first&&unlink_effect(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function remove_effect_dom(e,t){for(;null!==e;){var n=e===t?null:get_next_sibling(e);e.remove(),e=n;}}function unlink_effect(e){var t=e.parent,n=e.prev,r=e.next;null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n));}function pause_effect(e,t){var n=[];pause_children(e,n,true),run_out_transitions(n,(()=>{destroy_effect(e),t&&t();}));}function run_out_transitions(e,t){var n=e.length;if(n>0){var r=__name$1((()=>--n||t()),"check");for(var s of e)s.out(r);}else t();}function pause_children(e,t,n){if(0===(e.f&M$1)){if(e.f^=M$1,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;null!==r;){var s=r.next;pause_children(r,t,!!(!!(65536&r.f)||0!==(r.f&z$1))&&n),r=s;}}}__name$1(set_hydrating,"set_hydrating"),__name$1(set_hydrate_node,"set_hydrate_node"),__name$1(hydrate_next,"hydrate_next"),__name$1(init_operations,"init_operations"),__name$1(create_text,"create_text"),__name$1(get_first_child,"get_first_child"),__name$1(get_next_sibling,"get_next_sibling"),__name$1(clear_text_content,"clear_text_content"),__name$1(push_effect,"push_effect"),__name$1(create_effect,"create_effect"),__name$1(teardown,"teardown"),__name$1(component_root,"component_root"),__name$1(effect,"effect"),__name$1(branch,"branch"),__name$1(execute_effect_teardown,"execute_effect_teardown"),__name$1(destroy_effect_children,"destroy_effect_children"),__name$1(destroy_block_effect_children,"destroy_block_effect_children"),__name$1(destroy_effect,"destroy_effect"),__name$1(remove_effect_dom,"remove_effect_dom"),__name$1(unlink_effect,"unlink_effect"),__name$1(pause_effect,"pause_effect"),__name$1(run_out_transitions,"run_out_transitions"),__name$1(pause_children,"pause_children");let G$1=[],J$1=[];function run_micro_tasks(){var e=G$1;G$1=[],run_all(e);}function run_idle_tasks(){var e=J$1;J$1=[],run_all(e);}function flush_tasks(){G$1.length>0&&run_micro_tasks(),J$1.length>0&&run_idle_tasks();}function handle_error(e){var t=ne$1;if(32768&t.f)invoke_error_boundary(e,t);else {if(!(128&t.f))throw e;t.fn(e);}}function invoke_error_boundary(e,t){for(;null!==t;){if(128&t.f)try{return void t.fn(e)}catch{}t=t.parent;}throw e}__name$1(run_micro_tasks,"run_micro_tasks"),__name$1(run_idle_tasks,"run_idle_tasks"),__name$1(flush_tasks,"flush_tasks"),__name$1(handle_error,"handle_error"),__name$1(invoke_error_boundary,"invoke_error_boundary");let Q$1=false,V$1=null,X$1=false,Y$1=false;function set_is_destroying_effect(e){Y$1=e;}__name$1(set_is_destroying_effect,"set_is_destroying_effect");let Z$1=[],ee$1=null,te$1=false;function set_active_reaction(e){ee$1=e;}__name$1(set_active_reaction,"set_active_reaction");let ne$1=null;function set_active_effect(e){ne$1=e;}__name$1(set_active_effect,"set_active_effect");let re$1=null;function push_reaction_value(e){null!==ee$1&&ee$1.f&T&&(null===re$1?re$1=[e]:re$1.push(e));}__name$1(push_reaction_value,"push_reaction_value");let se$1=null,oe$1=0,ae$1=null;function set_untracked_writes(e){ae$1=e;}__name$1(set_untracked_writes,"set_untracked_writes");let ie$1=1,le$1=0,ce$1=false;function increment_write_version(){return ++ie$1}function check_dirtiness(e){var t=e.f;if(0!==(t&N$1))return  true;if(0!==(t&j)){var n=e.deps,r=0!==(t&O);if(null!==n){var s,o,a=0!==(t&R),i=r&&null!==ne$1&&!ce$1,l=n.length;if(a||i){var c=e,f=c.parent;for(s=0;s<l;s++)o=n[s],!a&&o?.reactions?.includes(c)||(o.reactions??=[]).push(c);a&&(c.f^=R),i&&null!==f&&0===(f.f&O)&&(c.f^=O);}for(s=0;s<l;s++)if(check_dirtiness(o=n[s])&&update_derived(o),o.wv>e.wv)return  true}r&&(null===ne$1||ce$1)||set_signal_status(e,P);}return  false}function schedule_possible_effect_self_invalidation(e,t,n=true){var r=e.reactions;if(null!==r)for(var s=0;s<r.length;s++){var o=r[s];re$1?.includes(e)||(2&o.f?schedule_possible_effect_self_invalidation(o,t,false):t===o&&(n?set_signal_status(o,N$1):0!==(o.f&P)&&set_signal_status(o,j),schedule_effect(o)));}}function update_reaction(e){var t=se$1,n=oe$1,r=ae$1,s=ee$1,o=ce$1,a=re$1,i=L$1,l=te$1,c=e.f;se$1=null,oe$1=0,ae$1=null,ce$1=0!==(c&O)&&(te$1||!X$1||null===ee$1),ee$1=96&c?null:e,re$1=null,set_component_context(e.ctx),te$1=false,le$1++,e.f|=T;try{var f=(0,e.fn)(),_=e.deps;if(null!==se$1){var u;if(remove_reactions(e,oe$1),null!==_&&oe$1>0)for(_.length=oe$1+se$1.length,u=0;u<se$1.length;u++)_[oe$1+u]=se$1[u];else e.deps=_=se$1;if(!ce$1)for(u=oe$1;u<_.length;u++)(_[u].reactions??=[]).push(e);}else null!==_&&oe$1<_.length&&(remove_reactions(e,oe$1),_.length=oe$1);if(!(null===ae$1||te$1||null===_||6146&e.f))for(u=0;u<ae$1.length;u++)schedule_possible_effect_self_invalidation(ae$1[u],e);return null!==s&&s!==e&&(le$1++,null!==ae$1&&(null===r?r=ae$1:r.push(...ae$1))),f}catch(d){handle_error(d);}finally{se$1=t,oe$1=n,ae$1=r,ee$1=s,ce$1=o,re$1=a,set_component_context(i),te$1=l,e.f^=T;}}function remove_reaction(e,t$1){let n=t$1.reactions;if(null!==n){var r=t.call(n,e);if(-1!==r){var s=n.length-1;0===s?n=t$1.reactions=null:(n[r]=n[s],n.pop());}}null===n&&2&t$1.f&&(null===se$1||!se$1.includes(t$1))&&(set_signal_status(t$1,j),768&t$1.f||(t$1.f^=R),destroy_derived_effects(t$1),remove_reactions(t$1,0));}function remove_reactions(e,t){var n=e.deps;if(null!==n)for(var r=t;r<n.length;r++)remove_reaction(e,n[r]);}function update_effect(e){var t=e.f;if(0===(t&F$1)){set_signal_status(e,P);var n=ne$1,r=X$1;ne$1=e,X$1=true;try{16&t?destroy_block_effect_children(e):destroy_effect_children(e),execute_effect_teardown(e);var s=update_reaction(e);e.teardown="function"==typeof s?s:null,e.wv=ie$1;}finally{X$1=r,ne$1=n;}}}function infinite_loop_guard(){try{effect_update_depth_exceeded();}catch(e){if(null===V$1)throw e;invoke_error_boundary(e,V$1);}}function flush_queued_root_effects(){var e=X$1;try{var t=0;for(X$1=!0;Z$1.length>0;){t++>1e3&&infinite_loop_guard();var n=Z$1,r=n.length;Z$1=[];for(var s=0;s<r;s++){flush_queued_effects(process_effects(n[s]));}U$1.clear();}}finally{Q$1=false,X$1=e,V$1=null;}}function flush_queued_effects(e){var t=e.length;if(0!==t)for(var n=0;n<t;n++){var r=e[n];24576&r.f||check_dirtiness(r)&&(update_effect(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?unlink_effect(r):r.fn=null));}}function schedule_effect(e){Q$1||(Q$1=true,queueMicrotask(flush_queued_root_effects));for(var t=V$1=e;null!==t.parent;){var n=(t=t.parent).f;if(96&n){if(0===(n&P))return;t.f^=P;}}Z$1.push(t);}function process_effects(e){for(var t=[],n=e;null!==n;){var r=n.f,s=!!(96&r);if(!(s&&0!==(r&P))&&0===(r&M$1)){4&r?t.push(n):s?n.f^=P:check_dirtiness(n)&&update_effect(n);var o=n.first;if(null!==o){n=o;continue}}var a=n.parent;for(n=n.next;null===n&&null!==a;)n=a.next,a=a.parent;}return t}function flushSync(e){for(;;){if(flush_tasks(),0===Z$1.length)return Q$1=false,void(V$1=null);Q$1=true,flush_queued_root_effects();}}function get(e){var t=!!(2&e.f);if(null===ee$1||te$1){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent;null!==r&&0===(r.f&O)&&(n.f^=O);}}else if(!re$1?.includes(e)){var s=ee$1.deps;e.rv<le$1&&(e.rv=le$1,null===se$1&&null!==s&&s[oe$1]===e?oe$1++:null===se$1?se$1=[e]:ce$1&&se$1.includes(e)||se$1.push(e));}return t&&check_dirtiness(n=e)&&update_derived(n),Y$1&&U$1.has(e)?U$1.get(e):e.v}__name$1(increment_write_version,"increment_write_version"),__name$1(check_dirtiness,"check_dirtiness"),__name$1(schedule_possible_effect_self_invalidation,"schedule_possible_effect_self_invalidation"),__name$1(update_reaction,"update_reaction"),__name$1(remove_reaction,"remove_reaction"),__name$1(remove_reactions,"remove_reactions"),__name$1(update_effect,"update_effect"),__name$1(infinite_loop_guard,"infinite_loop_guard"),__name$1(flush_queued_root_effects,"flush_queued_root_effects"),__name$1(flush_queued_effects,"flush_queued_effects"),__name$1(schedule_effect,"schedule_effect"),__name$1(process_effects,"process_effects"),__name$1(flushSync,"flushSync"),__name$1(get,"get");const fe$1=-7169;function set_signal_status(e,t){e.f=e.f&fe$1|t;}__name$1(set_signal_status,"set_signal_status");const _e$1=["touchstart","touchmove"];function is_passive_event(e){return _e$1.includes(e)}__name$1(is_passive_event,"is_passive_event");const ue$1=new Set,de$1=new Set;function handle_event_propagation(e){var t=this,n=t.ownerDocument,r=e.type,s$1=e.composedPath?.()||[],o=s$1[0]||e.target,i=0,l=e.__root;if(l){var c=s$1.indexOf(l);if(-1!==c&&(t===document||t===window))return void(e.__root=t);var f=s$1.indexOf(t);if(-1===f)return;c<=f&&(i=c);}if((o=s$1[i]||e.target)!==t){s(e,"currentTarget",{configurable:true,get:()=>o||n});var _=ee$1,d=ne$1;set_active_reaction(null),set_active_effect(null);try{for(var p,v=[];null!==o;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var g=o["__"+r];if(null!=g&&(!o.disabled||e.target===o))if(a$1(g)){var[m,...y]=g;m.apply(o,[e,...y]);}else g.call(o,e);}catch(x){p?v.push(x):p=x;}if(e.cancelBubble||h===t||null===h)break;o=h;}if(p){for(let e of v)queueMicrotask((()=>{throw e}));throw p}}finally{e.__root=t,delete e.currentTarget,set_active_reaction(_),set_active_effect(d);}}}function assign_nodes(e,t){var n=ne$1;null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t);}function mount(e,t){return _mount(e,t)}function hydrate(e,t){init_operations(),t.intro=t.intro??false;const n=t.target,r$1=H$1,s=B$1;try{for(var o=get_first_child(n);o&&(8!==o.nodeType||o.data!==s$1);)o=get_next_sibling(o);if(!o)throw a;set_hydrating(!0),set_hydrate_node(o),hydrate_next();const r$1=_mount(e,{...t,anchor:o});if(null===B$1||8!==B$1.nodeType||B$1.data!==r)throw hydration_mismatch(),a;return set_hydrating(!1),r$1}catch(a$1){if(a$1===a)return  false===t.recover&&hydration_failed(),init_operations(),clear_text_content(n),set_hydrating(false),mount(e,t);throw a$1}finally{set_hydrating(r$1),set_hydrate_node(s);}}__name$1(handle_event_propagation,"handle_event_propagation"),__name$1(assign_nodes,"assign_nodes"),__name$1(mount,"mount"),__name$1(hydrate,"hydrate");const pe$1=new Map;function _mount(e,{target:t,anchor:n,props:r={},events:s,context:o,intro:a=true}){init_operations();var i=new Set,l=__name$1((e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!i.has(r)){i.add(r);var s=is_passive_event(r);t.addEventListener(r,handle_event_propagation,{passive:s});var o=pe$1.get(r);void 0===o?(document.addEventListener(r,handle_event_propagation,{passive:s}),pe$1.set(r,1)):pe$1.set(r,o+1);}}}),"event_handle");l(r$1(ue$1)),de$1.add(l);var c=void 0,f=component_root((()=>{var a=n??t.appendChild(create_text());return branch((()=>{o&&(push({}),L$1.c=o);s&&(r.$$events=s),H$1&&assign_nodes(a,null),c=e(a,r)||{},H$1&&(ne$1.nodes_end=B$1),o&&pop();})),()=>{for(var e of i){t.removeEventListener(e,handle_event_propagation);var r=pe$1.get(e);0===--r?(document.removeEventListener(e,handle_event_propagation),pe$1.delete(e)):pe$1.set(e,r);}de$1.delete(l),a!==n&&a.parentNode?.removeChild(a);}}));return ve.set(c,f),c}__name$1(_mount,"_mount");let ve=new WeakMap;function unmount(e,t){const n=ve.get(e);return n?(ve.delete(e),n(t)):Promise.resolve()}function asClassComponent$1(e){return class extends Svelte4Component{constructor(t){super({component:e,...t});}}}__name$1(unmount,"unmount"),__name$1(asClassComponent$1,"asClassComponent$1");class Svelte4Component{static{__name$1(this,"Svelte4Component");}#e;#t;constructor(e){var t=new Map,n=__name$1(((e,n)=>{var r=mutable_source(n,false,false);return t.set(e,r),r}),"add_source");const r=new Proxy({...e.props||{},$$events:{}},{get:(e,r)=>get(t.get(r)??n(r,Reflect.get(e,r))),has:(e,r)=>r===I$1||(get(t.get(r)??n(r,Reflect.get(e,r))),Reflect.has(e,r)),set:(e,r,s)=>(set(t.get(r)??n(r,s),s),Reflect.set(e,r,s))});this.#t=(e.hydrate?hydrate:mount)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??false,recover:e.recover}),e?.props?.$$host&&false!==e.sync||flushSync(),this.#e=r.$$events;for(const s$1 of Object.keys(this.#t))"$set"!==s$1&&"$destroy"!==s$1&&"$on"!==s$1&&s(this,s$1,{get(){return this.#t[s$1]},set(e){this.#t[s$1]=e;},enumerable:true});this.#t.$set=e=>{Object.assign(r,e);},this.#t.$destroy=()=>{unmount(this.#t);};}$set(e){this.#t.$set(e);}$on(e,t){this.#e[e]=this.#e[e]||[];const n=__name$1(((...e)=>t.call(this,...e)),"cb");return this.#e[e].push(n),()=>{this.#e[e]=this.#e[e].filter((e=>e!==n));}}$destroy(){this.#t.$destroy();}}let he$1=null;function set_read_implementation(e){he$1=e;}function set_manifest(e){}function asClassComponent(e){const t=asClassComponent$1(e),n=__name$1(((t,{context:n}={})=>{const r=render(e,{props:t,context:n});return {css:{code:"",map:null},head:r.head,html:r.body}}),"_render");return t.render=n,t}__name$1(set_read_implementation,"set_read_implementation"),__name$1(set_manifest,"set_manifest"),__name$1(asClassComponent,"asClassComponent");let ge$1=false;function set_building(){}function set_prerendering(){ge$1=true;}function Root(e,t){push$1();let{stores:n,page:r,constructors:s,components:o=[],form:a,data_0:i=null,data_1:l=null}=t;setContext("__svelte__",n),n.page.set(r);const c=s[1];if(s[1]){e.out+="\x3c!--[--\x3e";const t=s[0];e.out+="\x3c!----\x3e",t(e,{data:i,form:a,children:__name$1((e=>{e.out+="\x3c!----\x3e",c(e,{data:l,form:a}),e.out+="\x3c!----\x3e";}),"children"),$$slots:{default:true}}),e.out+="\x3c!----\x3e";}else {e.out+="\x3c!--[!--\x3e";const t=s[0];e.out+="\x3c!----\x3e",t(e,{data:i,form:a}),e.out+="\x3c!----\x3e";}e.out+="\x3c!--]--\x3e ",e.out+="\x3c!--[!--\x3e",e.out+="\x3c!--]--\x3e",pop$1();}__name$1(set_building,"set_building"),__name$1(set_prerendering,"set_prerendering"),__name$1(Root,"Root");const me$1={app_template_contains_nonce:false,csp:{mode:"auto",directives:{"upgrade-insecure-requests":false,"block-all-mixed-content":false},reportOnly:{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},csrf_check_origin:true,embedded:false,env_public_prefix:"PUBLIC_",env_private_prefix:"",hash_routing:false,hooks:null,preload_strategy:"modulepreload",root:asClassComponent(Root),service_worker:false,templates:{app:__name$1((({head:e,body:t,assets:n,nonce:r,env:s})=>'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<link rel="icon" href="'+n+'/favicon.png" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t'+e+'\n\t</head>\n\t<body data-sveltekit-preload-data="hover">\n\t\t<div style="display: contents">'+t+"</div>\n\t</body>\n\t<style>\n.h3 {\n    color: gold;\n    font-size: 27px;\n    text-align: center;\n    }\n\n.i3 {\n  margin-left: 3%;\n  text-align: left;\n}\n    \nhtml {background-color:#0c0c0c;}\n\ndiv {\n    color: blue;\n}\n\nbody {\n    font-size: 22px;\n    color: darkblue;\n    padding-left: 3%;\n    padding-right: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    min-height: 100vh;\n    border-radius: 17px;\n}\n\np {\n    color: rgb(219, 253, 244);\n    font-size: 24px;\n    text-indent: 3%;\n}\n\n.p2 {\n    color: rgb(195, 219, 255);\n}\n\nh3 {\n    color: gold;\n    font-size: 22px;\n}\n\n.columns {\n    column-count: 2;\n    display: flex;\n}\n\t\n  button {\n    margin-left: 1%;\n    background-color: rgb(72, 7, 162);\n    border-width: 2px;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    color: gold;\n    font-size: 22px;\n    box-shadow: 0px 0px 5px 0px rgb(255, 215, 0);\n    padding: 3px 10px 3px 10px; \n  } \n\n  \n  button:hover {\n    color: blue;\n    background-color: gold;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);\n    font-size: 23px;\n  }\n\npre {\n    color: rgb(241, 206, 206);\n    font-size: 24p;\n    white-space: pre-wrap;       /* Since CSS 2.1 */\n    word-break: keep-all;\n    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n    white-space: -pre-wrap;      /* Opera 4-6 */\n    white-space: -o-pre-wrap;    /* Opera 7 */\n    word-wrap: break-word;       /* Internet Explorer 5.5+ */\n}\n\ndiv {\n    color: darkgreen;\n}\n\nh3 {\n    color: rgb(140, 216, 248);\n}\n\nh1, h2 {\n    color: gold;\n}\n\nspan {\n    color: rgb(219, 253, 244);\n    font-size: 24px;\n}\n\np span {\n    /*text-transform: uppercase; */\n    color: rgb(219, 253, 244);\n    font-size: 24px;\n}\n\na {\n    /*background-color: lightblue; */\n    border-color: #E8F7C1;\n    color: rgb(232, 217, 241);\n    font-size: 22px;\n  } \n\n  a:hover {\n    color: magenta; \n    background-color: gold;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);\n  }\n\n   .h3a {\n    font-size: 32px; \n    font-weight: bold;\n  }\n\n   .h3b {\n    font-size: 32px; \n    font-weight: bold;\n    text-align: center;\n  }\n</style>\n</html>\n"),"app"),error:__name$1((({status:e,message:t})=>'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<title>'+t+"</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">"+e+'</span>\n\t\t\t<div class="message">\n\t\t\t\t<h1>'+t+"</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"),"error")},version_hash:"y3z86u"};async function get_hooks(){return {handle:undefined,handleFetch:undefined,handleError:undefined,init:undefined,reroute:undefined,transport:undefined}}__name$1(get_hooks,"get_hooks");

/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

class DevalueError extends Error {
	/**
	 * @param {string} message
	 * @param {string[]} keys
	 */
	constructor(message, keys) {
		super(message);
		this.name = 'DevalueError';
		this.path = keys.join('');
	}
}

/** @param {any} thing */
function is_primitive(thing) {
	return Object(thing) !== thing;
}

const object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
	Object.prototype
)
	.sort()
	.join('\0');

/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);

	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names
	);
}

/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}

/** @param {string} char */
function get_escaped_char(char) {
	switch (char) {
		case '"':
			return '\\"';
		case '<':
			return '\\u003C';
		case '\\':
			return '\\\\';
		case '\n':
			return '\\n';
		case '\r':
			return '\\r';
		case '\t':
			return '\\t';
		case '\b':
			return '\\b';
		case '\f':
			return '\\f';
		case '\u2028':
			return '\\u2028';
		case '\u2029':
			return '\\u2029';
		default:
			return char < ' '
				? `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`
				: '';
	}
}

/** @param {string} str */
function stringify_string(str) {
	let result = '';
	let last_pos = 0;
	const len = str.length;

	for (let i = 0; i < len; i += 1) {
		const char = str[i];
		const replacement = get_escaped_char(char);
		if (replacement) {
			result += str.slice(last_pos, i) + replacement;
			last_pos = i + 1;
		}
	}

	return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

/** @param {Record<string | symbol, any>} object */
function enumerable_symbols(object) {
	return Object.getOwnPropertySymbols(object).filter(
		(symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
	);
}

const is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

/** @param {string} key */
function stringify_key(key) {
	return is_identifier.test(key) ? '.' + key : '[' + JSON.stringify(key) + ']';
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
const reserved =
	/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;

/**
 * Turn a value into the JavaScript that creates an equivalent value
 * @param {any} value
 * @param {(value: any) => string | void} [replacer]
 */
function uneval(value, replacer) {
	const counts = new Map();

	/** @type {string[]} */
	const keys = [];

	const custom = new Map();

	/** @param {any} thing */
	function walk(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (!is_primitive(thing)) {
			if (counts.has(thing)) {
				counts.set(thing, counts.get(thing) + 1);
				return;
			}

			counts.set(thing, 1);

			if (replacer) {
				const str = replacer(thing);

				if (typeof str === 'string') {
					custom.set(thing, str);
					return;
				}
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'BigInt':
				case 'String':
				case 'Boolean':
				case 'Date':
				case 'RegExp':
					return;

				case 'Array':
					/** @type {any[]} */ (thing).forEach((value, i) => {
						keys.push(`[${i}]`);
						walk(value);
						keys.pop();
					});
					break;

				case 'Set':
					Array.from(thing).forEach(walk);
					break;

				case 'Map':
					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive$1(key) : '...'})`
						);
						walk(value);
						keys.pop();
					}
					break;
				
				case "Int8Array":
				case "Uint8Array":
				case "Uint8ClampedArray":
				case "Int16Array":
				case "Uint16Array":
				case "Int32Array":
				case "Uint32Array":
				case "Float32Array":
				case "Float64Array":
				case "BigInt64Array":
				case "BigUint64Array":
					return;
				
				case "ArrayBuffer":
					return;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (enumerable_symbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					for (const key in thing) {
						keys.push(stringify_key(key));
						walk(thing[key]);
						keys.pop();
					}
			}
		}
	}

	walk(value);

	const names = new Map();

	Array.from(counts)
		.filter((entry) => entry[1] > 1)
		.sort((a, b) => b[1] - a[1])
		.forEach((entry, i) => {
			names.set(entry[0], get_name(i));
		});

	/**
	 * @param {any} thing
	 * @returns {string}
	 */
	function stringify(thing) {
		if (names.has(thing)) {
			return names.get(thing);
		}

		if (is_primitive(thing)) {
			return stringify_primitive$1(thing);
		}

		if (custom.has(thing)) {
			return custom.get(thing);
		}

		const type = get_type(thing);

		switch (type) {
			case 'Number':
			case 'String':
			case 'Boolean':
				return `Object(${stringify(thing.valueOf())})`;

			case 'RegExp':
				return `new RegExp(${stringify_string(thing.source)}, "${
					thing.flags
				}")`;

			case 'Date':
				return `new Date(${thing.getTime()})`;

			case 'Array':
				const members = /** @type {any[]} */ (thing).map((v, i) =>
					i in thing ? stringify(v) : ''
				);
				const tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
				return `[${members.join(',')}${tail}]`;

			case 'Set':
			case 'Map':
				return `new ${type}([${Array.from(thing).map(stringify).join(',')}])`;
			
			case "Int8Array":
			case "Uint8Array":
			case "Uint8ClampedArray":
			case "Int16Array":
			case "Uint16Array":
			case "Int32Array":
			case "Uint32Array":
			case "Float32Array":
			case "Float64Array":
			case "BigInt64Array":
			case "BigUint64Array": {
				/** @type {import("./types.js").TypedArray} */
				const typedArray = thing;
				return `new ${type}([${typedArray.toString()}])`;
			}
				
			case "ArrayBuffer": {
				const ui8 = new Uint8Array(thing);
				return `new Uint8Array([${ui8.toString()}]).buffer`;
			}

			default:
				const obj = `{${Object.keys(thing)
					.map((key) => `${safe_key(key)}:${stringify(thing[key])}`)
					.join(',')}}`;
				const proto = Object.getPrototypeOf(thing);
				if (proto === null) {
					return Object.keys(thing).length > 0
						? `Object.assign(Object.create(null),${obj})`
						: `Object.create(null)`;
				}

				return obj;
		}
	}

	const str = stringify(value);

	if (names.size) {
		/** @type {string[]} */
		const params = [];

		/** @type {string[]} */
		const statements = [];

		/** @type {string[]} */
		const values = [];

		names.forEach((name, thing) => {
			params.push(name);

			if (custom.has(thing)) {
				values.push(/** @type {string} */ (custom.get(thing)));
				return;
			}

			if (is_primitive(thing)) {
				values.push(stringify_primitive$1(thing));
				return;
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					values.push(`Object(${stringify(thing.valueOf())})`);
					break;

				case 'RegExp':
					values.push(thing.toString());
					break;

				case 'Date':
					values.push(`new Date(${thing.getTime()})`);
					break;

				case 'Array':
					values.push(`Array(${thing.length})`);
					/** @type {any[]} */ (thing).forEach((v, i) => {
						statements.push(`${name}[${i}]=${stringify(v)}`);
					});
					break;

				case 'Set':
					values.push(`new Set`);
					statements.push(
						`${name}.${Array.from(thing)
							.map((v) => `add(${stringify(v)})`)
							.join('.')}`
					);
					break;

				case 'Map':
					values.push(`new Map`);
					statements.push(
						`${name}.${Array.from(thing)
							.map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`)
							.join('.')}`
					);
					break;

				default:
					values.push(
						Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}'
					);
					Object.keys(thing).forEach((key) => {
						statements.push(
							`${name}${safe_prop(key)}=${stringify(thing[key])}`
						);
					});
			}
		});

		statements.push(`return ${str}`);

		return `(function(${params.join(',')}){${statements.join(
			';'
		)}}(${values.join(',')}))`;
	} else {
		return str;
	}
}

/** @param {number} num */
function get_name(num) {
	let name = '';

	do {
		name = chars[num % chars.length] + name;
		num = ~~(num / chars.length) - 1;
	} while (num >= 0);

	return reserved.test(name) ? `${name}0` : name;
}

/** @param {string} c */
function escape_unsafe_char(c) {
	return escaped[c] || c;
}

/** @param {string} str */
function escape_unsafe_chars(str) {
	return str.replace(unsafe_chars, escape_unsafe_char);
}

/** @param {string} key */
function safe_key(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? key
		: escape_unsafe_chars(JSON.stringify(key));
}

/** @param {string} key */
function safe_prop(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? `.${key}`
		: `[${escape_unsafe_chars(JSON.stringify(key))}]`;
}

/** @param {any} thing */
function stringify_primitive$1(thing) {
	if (typeof thing === 'string') return stringify_string(thing);
	if (thing === void 0) return 'void 0';
	if (thing === 0 && 1 / thing < 0) return '-0';
	const str = String(thing);
	if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
	if (typeof thing === 'bigint') return thing + 'n';
	return str;
}

/**
 * Base64 Encodes an arraybuffer
 * @param {ArrayBuffer} arraybuffer
 * @returns {string}
 */
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";

  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }

  return binaryToAscii(binaryString);
}

const KEY_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Substitute for btoa since it's deprecated in node.
 * Does not do any input validation.
 *
 * @see https://github.com/jsdom/abab/blob/master/lib/btoa.js
 *
 * @param {string} str
 * @returns {string}
 */
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    /** @type {[number, number, number, number]} */
    const groupsOfSix = [undefined, undefined, undefined, undefined];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 0x03) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 0x0f) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 0x3f;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 */
function stringify(value, reducers) {
	/** @type {any[]} */
	const stringified = [];

	/** @type {Map<any, number>} */
	const indexes = new Map();

	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	if (reducers) {
		for (const key of Object.getOwnPropertyNames(reducers)) {
			custom.push({ key, fn: reducers[key] });
		}
	}

	/** @type {string[]} */
	const keys = [];

	let p = 0;

	/** @param {any} thing */
	function flatten(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (indexes.has(thing)) return indexes.get(thing);

		if (thing === undefined) return UNDEFINED;
		if (Number.isNaN(thing)) return NAN;
		if (thing === Infinity) return POSITIVE_INFINITY;
		if (thing === -Infinity) return NEGATIVE_INFINITY;
		if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;

		const index = p++;
		indexes.set(thing, index);

		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}

		let str = '';

		if (is_primitive(thing)) {
			str = stringify_primitive(thing);
		} else {
			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					str = `["Object",${stringify_primitive(thing)}]`;
					break;

				case 'BigInt':
					str = `["BigInt",${thing}]`;
					break;

				case 'Date':
					const valid = !isNaN(thing.getDate());
					str = `["Date","${valid ? thing.toISOString() : ''}"]`;
					break;

				case 'RegExp':
					const { source, flags } = thing;
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;

				case 'Array':
					str = '[';

					for (let i = 0; i < thing.length; i += 1) {
						if (i > 0) str += ',';

						if (i in thing) {
							keys.push(`[${i}]`);
							str += flatten(thing[i]);
							keys.pop();
						} else {
							str += HOLE;
						}
					}

					str += ']';

					break;

				case 'Set':
					str = '["Set"';

					for (const value of thing) {
						str += `,${flatten(value)}`;
					}

					str += ']';
					break;

				case 'Map':
					str = '["Map"';

					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive(key) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
						keys.pop();
					}

					str += ']';
					break;

				case "Int8Array":
				case "Uint8Array":
				case "Uint8ClampedArray":
				case "Int16Array":
				case "Uint16Array":
				case "Int32Array":
				case "Uint32Array":
				case "Float32Array":
				case "Float64Array":
				case "BigInt64Array":
				case "BigUint64Array": {
					/** @type {import("./types.js").TypedArray} */
					const typedArray = thing;
					const base64 = encode64(typedArray.buffer);
					str = '["' + type + '","' + base64 + '"]';
					break;
				}
					
				case "ArrayBuffer": {
					/** @type {ArrayBuffer} */
					const arraybuffer = thing;
					const base64 = encode64(arraybuffer);
					
					str = `["ArrayBuffer","${base64}"]`;
					break;
				}
				
				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (enumerable_symbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					if (Object.getPrototypeOf(thing) === null) {
						str = '["null"';
						for (const key in thing) {
							keys.push(stringify_key(key));
							str += `,${stringify_string(key)},${flatten(thing[key])}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key in thing) {
							if (started) str += ',';
							started = true;
							keys.push(stringify_key(key));
							str += `${stringify_string(key)}:${flatten(thing[key])}`;
							keys.pop();
						}
						str += '}';
					}
			}
		}

		stringified[index] = str;
		return index;
	}

	const index = flatten(value);

	// special case — value is represented as a negative index
	if (index < 0) return `${index}`;

	return `[${stringified.join(',')}]`;
}

/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing instanceof String) return stringify_string(thing.toString());
	if (thing === void 0) return UNDEFINED.toString();
	if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}

var cookie = {};

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredCookie;

function requireCookie () {
	if (hasRequiredCookie) return cookie;
	hasRequiredCookie = 1;

	/**
	 * Module exports.
	 * @public
	 */

	cookie.parse = parse;
	cookie.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var __toString = Object.prototype.toString;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {};
	  var opt = options || {};
	  var dec = opt.decode || decode;

	  var index = 0;
	  while (index < str.length) {
	    var eqIdx = str.indexOf('=', index);

	    // no more cookie pairs
	    if (eqIdx === -1) {
	      break
	    }

	    var endIdx = str.indexOf(';', index);

	    if (endIdx === -1) {
	      endIdx = str.length;
	    } else if (endIdx < eqIdx) {
	      // backtrack on prior semicolon
	      index = str.lastIndexOf(';', eqIdx - 1) + 1;
	      continue
	    }

	    var key = str.slice(index, eqIdx).trim();

	    // only assign once
	    if (undefined === obj[key]) {
	      var val = str.slice(eqIdx + 1, endIdx).trim();

	      // quoted values
	      if (val.charCodeAt(0) === 0x22) {
	        val = val.slice(1, -1);
	      }

	      obj[key] = tryDecode(val, dec);
	    }

	    index = endIdx + 1;
	  }

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;

	    if (isNaN(maxAge) || !isFinite(maxAge)) {
	      throw new TypeError('option maxAge is invalid')
	    }

	    str += '; Max-Age=' + Math.floor(maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    var expires = opt.expires;

	    if (!isDate(expires) || isNaN(expires.valueOf())) {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.partitioned) {
	    str += '; Partitioned';
	  }

	  if (opt.priority) {
	    var priority = typeof opt.priority === 'string'
	      ? opt.priority.toLowerCase()
	      : opt.priority;

	    switch (priority) {
	      case 'low':
	        str += '; Priority=Low';
	        break
	      case 'medium':
	        str += '; Priority=Medium';
	        break
	      case 'high':
	        str += '; Priority=High';
	        break
	      default:
	        throw new TypeError('option priority is invalid')
	    }
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      case 'none':
	        str += '; SameSite=None';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * URL-decode string value. Optimized to skip native call when no %.
	 *
	 * @param {string} str
	 * @returns {string}
	 */

	function decode (str) {
	  return str.indexOf('%') !== -1
	    ? decodeURIComponent(str)
	    : str
	}

	/**
	 * URL-encode value.
	 *
	 * @param {string} val
	 * @returns {string}
	 */

	function encode (val) {
	  return encodeURIComponent(val)
	}

	/**
	 * Determine if value is a Date.
	 *
	 * @param {*} val
	 * @private
	 */

	function isDate (val) {
	  return __toString.call(val) === '[object Date]' ||
	    val instanceof Date
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}
	return cookie;
}

var cookieExports = requireCookie();

var setCookie = {exports: {}};

var hasRequiredSetCookie;

function requireSetCookie () {
	if (hasRequiredSetCookie) return setCookie.exports;
	hasRequiredSetCookie = 1;

	var defaultParseOptions = {
	  decodeValues: true,
	  map: false,
	  silent: false,
	};

	function isNonEmptyString(str) {
	  return typeof str === "string" && !!str.trim();
	}

	function parseString(setCookieValue, options) {
	  var parts = setCookieValue.split(";").filter(isNonEmptyString);

	  var nameValuePairStr = parts.shift();
	  var parsed = parseNameValuePair(nameValuePairStr);
	  var name = parsed.name;
	  var value = parsed.value;

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  try {
	    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
	  } catch (e) {
	    console.error(
	      "set-cookie-parser encountered an error while decoding a cookie with value '" +
	        value +
	        "'. Set options.decodeValues to false to disable this feature.",
	      e
	    );
	  }

	  var cookie = {
	    name: name,
	    value: value,
	  };

	  parts.forEach(function (part) {
	    var sides = part.split("=");
	    var key = sides.shift().trimLeft().toLowerCase();
	    var value = sides.join("=");
	    if (key === "expires") {
	      cookie.expires = new Date(value);
	    } else if (key === "max-age") {
	      cookie.maxAge = parseInt(value, 10);
	    } else if (key === "secure") {
	      cookie.secure = true;
	    } else if (key === "httponly") {
	      cookie.httpOnly = true;
	    } else if (key === "samesite") {
	      cookie.sameSite = value;
	    } else if (key === "partitioned") {
	      cookie.partitioned = true;
	    } else {
	      cookie[key] = value;
	    }
	  });

	  return cookie;
	}

	function parseNameValuePair(nameValuePairStr) {
	  // Parses name-value-pair according to rfc6265bis draft

	  var name = "";
	  var value = "";
	  var nameValueArr = nameValuePairStr.split("=");
	  if (nameValueArr.length > 1) {
	    name = nameValueArr.shift();
	    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
	  } else {
	    value = nameValuePairStr;
	  }

	  return { name: name, value: value };
	}

	function parse(input, options) {
	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!input) {
	    if (!options.map) {
	      return [];
	    } else {
	      return {};
	    }
	  }

	  if (input.headers) {
	    if (typeof input.headers.getSetCookie === "function") {
	      // for fetch responses - they combine headers of the same type in the headers array,
	      // but getSetCookie returns an uncombined array
	      input = input.headers.getSetCookie();
	    } else if (input.headers["set-cookie"]) {
	      // fast-path for node.js (which automatically normalizes header names to lower-case
	      input = input.headers["set-cookie"];
	    } else {
	      // slow-path for other environments - see #25
	      var sch =
	        input.headers[
	          Object.keys(input.headers).find(function (key) {
	            return key.toLowerCase() === "set-cookie";
	          })
	        ];
	      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
	      if (!sch && input.headers.cookie && !options.silent) {
	        console.warn(
	          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
	        );
	      }
	      input = sch;
	    }
	  }
	  if (!Array.isArray(input)) {
	    input = [input];
	  }

	  if (!options.map) {
	    return input.filter(isNonEmptyString).map(function (str) {
	      return parseString(str, options);
	    });
	  } else {
	    var cookies = {};
	    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
	      var cookie = parseString(str, options);
	      cookies[cookie.name] = cookie;
	      return cookies;
	    }, cookies);
	  }
	}

	/*
	  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
	  that are within a single set-cookie field-value, such as in the Expires portion.

	  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
	  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
	  React Native's fetch does this for *every* header, including set-cookie.

	  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
	  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
	*/
	function splitCookiesString(cookiesString) {
	  if (Array.isArray(cookiesString)) {
	    return cookiesString;
	  }
	  if (typeof cookiesString !== "string") {
	    return [];
	  }

	  var cookiesStrings = [];
	  var pos = 0;
	  var start;
	  var ch;
	  var lastComma;
	  var nextStart;
	  var cookiesSeparatorFound;

	  function skipWhitespace() {
	    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
	      pos += 1;
	    }
	    return pos < cookiesString.length;
	  }

	  function notSpecialChar() {
	    ch = cookiesString.charAt(pos);

	    return ch !== "=" && ch !== ";" && ch !== ",";
	  }

	  while (pos < cookiesString.length) {
	    start = pos;
	    cookiesSeparatorFound = false;

	    while (skipWhitespace()) {
	      ch = cookiesString.charAt(pos);
	      if (ch === ",") {
	        // ',' is a cookie separator if we have later first '=', not ';' or ','
	        lastComma = pos;
	        pos += 1;

	        skipWhitespace();
	        nextStart = pos;

	        while (pos < cookiesString.length && notSpecialChar()) {
	          pos += 1;
	        }

	        // currently special character
	        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	          // we found cookies separator
	          cookiesSeparatorFound = true;
	          // pos is inside the next cookie, so back up and return it.
	          pos = nextStart;
	          cookiesStrings.push(cookiesString.substring(start, lastComma));
	          start = pos;
	        } else {
	          // in param ',' or param separator ';',
	          // we continue from that comma
	          pos = lastComma + 1;
	        }
	      } else {
	        pos += 1;
	      }
	    }

	    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	    }
	  }

	  return cookiesStrings;
	}

	setCookie.exports = parse;
	setCookie.exports.parse = parse;
	setCookie.exports.parseString = parseString;
	setCookie.exports.splitCookiesString = splitCookiesString;
	return setCookie.exports;
}

var setCookieExports = /*@__PURE__*/ requireSetCookie();

var e=Object.defineProperty,__name=(t,r)=>e(t,"name",{value:r,configurable:true});const C=["GET","POST","PUT","PATCH","DELETE","OPTIONS","HEAD"],H=["GET","POST","HEAD"];function negotiate(e,t){const r=[];let s;e.split(",").forEach(((e,t)=>{const s=/([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(e);if(s){const[,e,n,a="1"]=s;r.push({type:e,subtype:n,q:+a,i:t});}})),r.sort(((e,t)=>e.q!==t.q?t.q-e.q:"*"===e.subtype!=("*"===t.subtype)?"*"===e.subtype?1:-1:"*"===e.type!=("*"===t.type)?"*"===e.type?1:-1:e.i-t.i));let n=1/0;for(const a of t){const[e,t]=a.split("/"),o=r.findIndex((r=>!(r.type!==e&&"*"!==r.type||r.subtype!==t&&"*"!==r.subtype)));-1!==o&&o<n&&(s=a,n=o);}return s}function is_content_type(e,...t){const r=e.headers.get("content-type")?.split(";",1)[0].trim()??"";return t.includes(r.toLowerCase())}function is_form_content_type(e){return is_content_type(e,"application/x-www-form-urlencoded","multipart/form-data","text/plain")}__name(negotiate,"negotiate"),__name(is_content_type,"is_content_type"),__name(is_form_content_type,"is_form_content_type");let z,U=null;function with_event(e,t){try{return U=e,z?z.run(e,t):t()}finally{U=null;}}import('node:async_hooks').then((e=>z=new e.AsyncLocalStorage)).catch((()=>{})),__name(with_event,"with_event");class HttpError{static{__name(this,"HttpError");}constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`};}toString(){return JSON.stringify(this.body)}}class Redirect{static{__name(this,"Redirect");}constructor(e,t){this.status=e,this.location=t;}}class SvelteKitError extends Error{static{__name(this,"SvelteKitError");}constructor(e,t,r){super(r),this.status=e,this.text=t;}}class ActionFailure{static{__name(this,"ActionFailure");}constructor(e,t){this.status=e,this.data=t;}}const N="/__data.json",L=".html__data.json";function has_data_suffix(e){return e.endsWith(N)||e.endsWith(L)}function add_data_suffix(e){return e.endsWith(".html")?e.replace(/\.html$/,L):e.replace(/\/$/,"")+N}function strip_data_suffix(e){return e.endsWith(L)?e.slice(0,-16)+".html":e.slice(0,-12)}__name(has_data_suffix,"has_data_suffix"),__name(add_data_suffix,"add_data_suffix"),__name(strip_data_suffix,"strip_data_suffix");const W="/__route.js";function has_resolution_suffix(e){return e.endsWith(W)}function add_resolution_suffix(e){return e.replace(/\/$/,"")+W}function strip_resolution_suffix(e){return e.slice(0,-11)}function json(e,t){const r=JSON.stringify(e),s=new Headers(t?.headers);return s.has("content-length")||s.set("content-length",D.encode(r).byteLength.toString()),s.has("content-type")||s.set("content-type","application/json"),new Response(r,{...t,headers:s})}__name(has_resolution_suffix,"has_resolution_suffix"),__name(add_resolution_suffix,"add_resolution_suffix"),__name(strip_resolution_suffix,"strip_resolution_suffix"),__name(json,"json");const D=new TextEncoder;function text(e,t){const r=new Headers(t?.headers);if(!r.has("content-length")){const s=D.encode(e);return r.set("content-length",s.byteLength.toString()),new Response(s,{...t,headers:r})}return new Response(e,{...t,headers:r})}function coalesce_to_error(e){return e instanceof Error||e&&e.name&&e.message?e:new Error(JSON.stringify(e))}function normalize_error(e){return e}function get_status(e){return e instanceof HttpError||e instanceof SvelteKitError?e.status:500}function get_message(e){return e instanceof SvelteKitError?e.text:"Internal Error"}__name(text,"text"),__name(coalesce_to_error,"coalesce_to_error"),__name(normalize_error,"normalize_error"),__name(get_status,"get_status"),__name(get_message,"get_message");const I={"&":"&amp;",'"':"&quot;"},F={"&":"&amp;","<":"&lt;"},M="[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]",B=new RegExp(`[${Object.keys(I).join("")}]|`+M,"g"),J=new RegExp(`[${Object.keys(F).join("")}]|`+M,"g");function escape_html(e,t){const r=t?I:F;return e.replace(t?B:J,(e=>2===e.length?e:r[e]??`&#${e.charCodeAt(0)};`))}function method_not_allowed(e,t){return text(`${t} method not allowed`,{status:405,headers:{allow:allowed_methods(e).join(", ")}})}function allowed_methods(e){const t=C.filter((t=>t in e));return ("GET"in e||"HEAD"in e)&&t.push("HEAD"),t}function static_error_page(e,t,r){return text(e.templates.error({status:t,message:escape_html(r)}),{headers:{"content-type":"text/html; charset=utf-8"},status:t})}async function handle_fatal_error(e,t,r){const s=get_status(r=r instanceof HttpError?r:coalesce_to_error(r)),n=await handle_error_and_jsonify(e,t,r),a=negotiate(e.request.headers.get("accept")||"text/html",["application/json","text/html"]);return e.isDataRequest||"application/json"===a?json(n,{status:s}):static_error_page(t,s,n.message)}async function handle_error_and_jsonify(e,t,r){if(r instanceof HttpError)return r.body;const s=get_status(r),n=get_message(r);return await with_event(e,(()=>t.hooks.handleError({error:r,event:e,status:s,message:n})))??{message:n}}function redirect_response(e,t){return new Response(void 0,{status:e,headers:{location:t}})}function clarify_devalue_error(e,t){return t.path?`Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (${t.path})`:""===t.path?`Data returned from \`load\` while rendering ${e.route.id} is not a plain object`:t.message}function serialize_uses(e){const t={};return e.uses&&e.uses.dependencies.size>0&&(t.dependencies=Array.from(e.uses.dependencies)),e.uses&&e.uses.search_params.size>0&&(t.search_params=Array.from(e.uses.search_params)),e.uses&&e.uses.params.size>0&&(t.params=Array.from(e.uses.params)),e.uses?.parent&&(t.parent=1),e.uses?.route&&(t.route=1),e.uses?.url&&(t.url=1),t}function has_prerendered_path(e,t){return e._.prerendered_routes.has(t)||"/"===t.at(-1)&&e._.prerendered_routes.has(t.slice(0,-1))}async function render_endpoint(e,t,r){const s=e.request.method;let n=t[s]||t.fallback;if("HEAD"===s&&!t.HEAD&&t.GET&&(n=t.GET),!n)return method_not_allowed(t,s);const a=t.prerender??r.prerender_default;if(a&&(t.POST||t.PATCH||t.PUT||t.DELETE))throw new Error("Cannot prerender endpoints that have mutative methods");if(r.prerendering&&!r.prerendering.inside_reroute&&!a){if(r.depth>0)throw new Error(`${e.route.id} is not prerenderable`);return new Response(void 0,{status:204})}try{const t=await with_event(e,(()=>n(e)));if(!(t instanceof Response))throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);if(r.prerendering&&(!r.prerendering.inside_reroute||a)){const s=new Response(t.clone().body,{status:t.status,statusText:t.statusText,headers:new Headers(t.headers)});if(s.headers.set("x-sveltekit-prerender",String(a)),!r.prerendering.inside_reroute||!a)return s;s.headers.set("x-sveltekit-routeid",encodeURI(e.route.id)),r.prerendering.dependencies.set(e.url.pathname,{response:s,body:null});}return t}catch(o){if(o instanceof Redirect)return new Response(void 0,{status:o.status,headers:{location:o.location}});throw o}}function is_endpoint_request(e){const{method:t,headers:r}=e.request;if(C.includes(t)&&!H.includes(t))return  true;if("POST"===t&&"true"===r.get("x-sveltekit-action"))return  false;return "text/html"!==negotiate(e.request.headers.get("accept")??"*/*",["*","text/html"])}function compact(e){return e.filter((e=>null!=e))}function is_action_json_request(e){return "application/json"===negotiate(e.request.headers.get("accept")??"*/*",["application/json","text/html"])&&"POST"===e.request.method}async function handle_action_json_request(e,t,r){const s=r?.actions;if(!s){const r=new SvelteKitError(405,"Method Not Allowed","POST method not allowed. No form actions exist for this page");return action_json({type:"error",error:await handle_error_and_jsonify(e,t,r)},{status:r.status,headers:{allow:"GET"}})}check_named_default_separate(s);try{const r=await call_action(e,s);return action_json(r instanceof ActionFailure?{type:"failure",status:r.status,data:stringify_action_response(r.data,e.route.id,t.hooks.transport)}:{type:"success",status:r?200:204,data:stringify_action_response(r,e.route.id,t.hooks.transport)})}catch(n){const r=n;return r instanceof Redirect?action_json_redirect(r):action_json({type:"error",error:await handle_error_and_jsonify(e,t,check_incorrect_fail_use(r))},{status:get_status(r)})}}function check_incorrect_fail_use(e){return e instanceof ActionFailure?new Error('Cannot "throw fail()". Use "return fail()"'):e}function action_json_redirect(e){return action_json({type:"redirect",status:e.status,location:e.location})}function action_json(e,t){return json(e,t)}function is_action_request(e){return "POST"===e.request.method}async function handle_action_request(e,t){const r=t?.actions;if(!r)return e.setHeaders({allow:"GET"}),{type:"error",error:new SvelteKitError(405,"Method Not Allowed","POST method not allowed. No form actions exist for this page")};check_named_default_separate(r);try{const t=await call_action(e,r);return t instanceof ActionFailure?{type:"failure",status:t.status,data:t.data}:{type:"success",status:200,data:t}}catch(s){const e=s;return e instanceof Redirect?{type:"redirect",status:e.status,location:e.location}:{type:"error",error:check_incorrect_fail_use(e)}}}function check_named_default_separate(e){if(e.default&&Object.keys(e).length>1)throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions")}async function call_action(e,t){const r=new URL(e.request.url);let s="default";for(const a of r.searchParams)if(a[0].startsWith("/")){if(s=a[0].slice(1),"default"===s)throw new Error('Cannot use reserved action name "default"');break}const n=t[s];if(!n)throw new SvelteKitError(404,"Not Found",`No action with name '${s}' found`);if(!is_form_content_type(e.request))throw new SvelteKitError(415,"Unsupported Media Type",`Form actions expect form-encoded data — received ${e.request.headers.get("content-type")}`);return with_event(e,(()=>n(e)))}function uneval_action_response(e,t,r){const s=__name((e=>{for(const t in r){const n=r[t].encode(e);if(n)return `app.decode('${t}', ${uneval(n,s)})`}}),"replacer");return try_serialize(e,(e=>uneval(e,s)),t)}function stringify_action_response(e,t,r){const s=Object.fromEntries(Object.entries(r).map((([e,t])=>[e,t.encode])));return try_serialize(e,(e=>stringify(e,s)),t)}function try_serialize(e,t,r){try{return t(e)}catch(s){const t=s;if(e instanceof Response)throw new Error(`Data returned from action inside ${r} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`);if("path"in t){let e=`Data returned from action inside ${r} is not serializable: ${t.message}`;throw ""!==t.path&&(e+=` (data.${t.path})`),new Error(e)}throw t}}__name(escape_html,"escape_html"),__name(method_not_allowed,"method_not_allowed"),__name(allowed_methods,"allowed_methods"),__name(static_error_page,"static_error_page"),__name(handle_fatal_error,"handle_fatal_error"),__name(handle_error_and_jsonify,"handle_error_and_jsonify"),__name(redirect_response,"redirect_response"),__name(clarify_devalue_error,"clarify_devalue_error"),__name(serialize_uses,"serialize_uses"),__name(has_prerendered_path,"has_prerendered_path"),__name(render_endpoint,"render_endpoint"),__name(is_endpoint_request,"is_endpoint_request"),__name(compact,"compact"),__name(is_action_json_request,"is_action_json_request"),__name(handle_action_json_request,"handle_action_json_request"),__name(check_incorrect_fail_use,"check_incorrect_fail_use"),__name(action_json_redirect,"action_json_redirect"),__name(action_json,"action_json"),__name(is_action_request,"is_action_request"),__name(handle_action_request,"handle_action_request"),__name(check_named_default_separate,"check_named_default_separate"),__name(call_action,"call_action"),__name((function validate_action_return(e){if(e instanceof Redirect)throw new Error("Cannot `return redirect(...)` — use `redirect(...)` instead");if(e instanceof HttpError)throw new Error("Cannot `return error(...)` — use `error(...)` or `return fail(...)` instead")}),"validate_action_return"),__name(uneval_action_response,"uneval_action_response"),__name(stringify_action_response,"stringify_action_response"),__name(try_serialize,"try_serialize"),__name((function validate_depends(e,t){const r=/^(moz-icon|view-source|jar):/.exec(t);r&&console.warn(`${e}: Calling \`depends('${t}')\` will throw an error in Firefox because \`${r[1]}\` is a special URI scheme`);}),"validate_depends");const G="x-sveltekit-invalidated",K="x-sveltekit-trailing-slash";function b64_encode(e){if(globalThis.Buffer)return Buffer.from(e).toString("base64");const t=new Uint8Array(new Uint16Array([1]).buffer)[0]>0;return btoa(new TextDecoder(t?"utf-16le":"utf-16be").decode(new Uint16Array(new Uint8Array(e))))}function get_relative_path(e,t){const r=e.split(/[/\\]/),s=t.split(/[/\\]/);for(r.pop();r[0]===s[0];)r.shift(),s.shift();let n=r.length;for(;n--;)r[n]="..";return r.concat(s).join("/")}async function load_server_data({event:e,state:r,node:s,parent:n}){if(!s?.server)return null;let a=true;const o={dependencies:new Set,params:new Set,parent:false,route:false,url:false,search_params:new Set},i=s.server.load,c=s.server.trailingSlash;if(!i)return {type:"data",data:null,uses:o,slash:c};const d=make_trackable(e.url,(()=>{a&&(o.url=true);}),(e=>{a&&o.search_params.add(e);}));r.prerendering&&disable_search(d);let l=false;const u=await with_event(e,(()=>i.call(null,{...e,fetch:__name(((r,s)=>{const n=new URL(r instanceof Request?r.url:r,e.url);return o$1&&l&&o.dependencies.has(n.href),e.fetch(r,s)}),"fetch"),depends:__name(((...t)=>{for(const r of t){const{href:t}=new URL(r,e.url);o.dependencies.add(t);}}),"depends"),params:new Proxy(e.params,{get:__name(((e,r)=>(o$1&&l&&"string"==typeof r&&o.params.has(r),a&&o.params.add(r),e[r])),"get")}),parent:__name((async()=>(o$1&&l&&o.parent,a&&(o.parent=!0),n())),"parent"),route:new Proxy(e.route,{get:__name(((e,r)=>(o$1&&l&&"string"==typeof r&&o.route,a&&(o.route=!0),e[r])),"get")}),url:d,untrack(e){a=!1;try{return e()}finally{a=!0;}}})));return l=true,{type:"data",data:u??null,uses:o,slash:c}}async function load_data({event:e,fetched:t,node:r,parent:s,server_data_promise:n,state:a,resolve_opts:o,csr:i}){const c=await n;if(!r?.universal?.load)return c?.data??null;return await r.universal.load.call(null,{url:e.url,params:e.params,data:c?.data??null,route:e.route,fetch:create_universal_fetch(e,a,t,i,o),setHeaders:e.setHeaders,depends:__name((()=>{}),"depends"),parent:s,untrack:__name((e=>e()),"untrack")})??null}function create_universal_fetch(e,t,r,s,n){const a=__name((async(a,o)=>{const i=a instanceof Request&&a.body?a.clone().body:null,c=a instanceof Request&&[...a.headers].length?new Headers(a.headers):o?.headers;let d=await e.fetch(a,o);const l=new URL(a instanceof Request?a.url:a,e.url),u=l.origin===e.url.origin;let p;if(u)t.prerendering&&(p={response:d,body:null},t.prerendering.dependencies.set(l.pathname,p));else if("https:"===l.protocol||"http:"===l.protocol){if("no-cors"===(a instanceof Request?a.mode:o?.mode??"cors"))d=new Response("",{status:d.status,statusText:d.statusText,headers:d.headers});else {const t=d.headers.get("access-control-allow-origin");if(!t||t!==e.url.origin&&"*"!==t)throw new Error(`CORS error: ${t?"Incorrect":"No"} 'Access-Control-Allow-Origin' header is present on the requested resource`)}}const _=new Proxy(d,{get(t,s,n){async function push_fetched(s,n){const d=Number(t.status);if(isNaN(d))throw new Error(`response.status is not a number. value: "${t.status}" type: ${typeof t.status}`);r.push({url:u?l.href.slice(e.url.origin.length):l.href,method:e.request.method,request_body:a instanceof Request&&i?await stream_to_string(i):o?.body,request_headers:c,response_body:s,response:t,is_b64:n});}if(__name(push_fetched,"push_fetched"),"arrayBuffer"===s)return async()=>{const e=await t.arrayBuffer();return p&&(p.body=new Uint8Array(e)),e instanceof ArrayBuffer&&await push_fetched(b64_encode(e),true),e};async function text2(){const e=await t.text();return e&&"string"!=typeof e||await push_fetched(e,false),p&&(p.body=e),e}return __name(text2,"text"),"text"===s?text2:"json"===s?async()=>JSON.parse(await text2()):Reflect.get(t,s,t)}});if(s){const t=d.headers.get;d.headers.get=r=>{const s=r.toLowerCase(),a=t.call(d.headers,s);if(a&&!s.startsWith("x-sveltekit-")){if(!n.filterSerializedResponseHeaders(s,a))throw new Error(`Failed to get response header "${s}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${e.route.id})`)}return a};}return _}),"universal_fetch");return (e,t)=>{const r=a(e,t);return r.catch((()=>{})),r}}async function stream_to_string(e){let t="";const r=e.getReader(),s=new TextDecoder;for(;;){const{done:e,value:n}=await r.read();if(e)break;t+=s.decode(n);}return t}function hash(...e){let t=5381;for(const r of e)if("string"==typeof r){let e=r.length;for(;e;)t=33*t^r.charCodeAt(--e);}else {if(!ArrayBuffer.isView(r))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=e.length;for(;s;)t=33*t^e[--s];}}return (t>>>0).toString(36)}__name(b64_encode,"b64_encode"),__name(get_relative_path,"get_relative_path"),__name(load_server_data,"load_server_data"),__name(load_data,"load_data"),__name(create_universal_fetch,"create_universal_fetch"),__name(stream_to_string,"stream_to_string"),__name(hash,"hash");const V={"<":"\\u003C","\u2028":"\\u2028","\u2029":"\\u2029"},Q=new RegExp(`[${Object.keys(V).join("")}]`,"g");function serialize_data(e,t,r=false){const s={};let n=null,a=null,o=false;for(const[l,u]of e.response.headers)t(l,u)&&(s[l]=u),"cache-control"===l?n=u:"age"===l?a=u:"vary"===l&&"*"===u.trim()&&(o=true);const i={status:e.response.status,statusText:e.response.statusText,headers:s,body:e.response_body},c=JSON.stringify(i).replace(Q,(e=>V[e])),d=['type="application/json"',"data-sveltekit-fetched",`data-url="${escape_html(e.url,true)}"`];if(e.is_b64&&d.push("data-b64"),e.request_headers||e.request_body){const t=[];e.request_headers&&t.push([...new Headers(e.request_headers)].join(",")),e.request_body&&t.push(e.request_body),d.push(`data-hash="${hash(...t)}"`);}if(!r&&"GET"===e.method&&n&&!o){const e=/s-maxage=(\d+)/g.exec(n)??/max-age=(\d+)/g.exec(n);if(e){const t=+e[1]-+(a??"0");d.push(`data-ttl="${t}"`);}}return `<script ${d.join(" ")}>${c}<\/script>`}__name(serialize_data,"serialize_data");const X=JSON.stringify,Y=new TextEncoder;function sha256(e){ee[0]||precompute();const t=Z.slice(0),r=encode(e);for(let n=0;n<r.length;n+=16){const e=r.subarray(n,n+16);let s,a,o,i=t[0],c=t[1],d=t[2],l=t[3],u=t[4],p=t[5],_=t[6],h=t[7];for(let t=0;t<64;t++)t<16?s=e[t]:(a=e[t+1&15],o=e[t+14&15],s=e[15&t]=(a>>>7^a>>>18^a>>>3^a<<25^a<<14)+(o>>>17^o>>>19^o>>>10^o<<15^o<<13)+e[15&t]+e[t+9&15]|0),s=s+h+(u>>>6^u>>>11^u>>>25^u<<26^u<<21^u<<7)+(_^u&(p^_))+ee[t],h=_,_=p,p=u,u=l+s|0,l=d,d=c,c=i,i=s+(c&d^l&(c^d))+(c>>>2^c>>>13^c>>>22^c<<30^c<<19^c<<10)|0;t[0]=t[0]+i|0,t[1]=t[1]+c|0,t[2]=t[2]+d|0,t[3]=t[3]+l|0,t[4]=t[4]+u|0,t[5]=t[5]+p|0,t[6]=t[6]+_|0,t[7]=t[7]+h|0;}const s=new Uint8Array(t.buffer);return reverse_endianness(s),base64(s)}__name(sha256,"sha256");const Z=new Uint32Array(8),ee=new Uint32Array(64);function precompute(){function frac(e){return 4294967296*(e-Math.floor(e))}__name(frac,"frac");let e=2;for(let t=0;t<64;e++){let r=true;for(let t=2;t*t<=e;t++)if(e%t===0){r=false;break}r&&(t<8&&(Z[t]=frac(e**.5)),ee[t]=frac(e**(1/3)),t++);}}function reverse_endianness(e){for(let t=0;t<e.length;t+=4){const r=e[t+0],s=e[t+1],n=e[t+2],a=e[t+3];e[t+0]=a,e[t+1]=n,e[t+2]=s,e[t+3]=r;}}function encode(e){const t=Y.encode(e),r=8*t.length,s=512*Math.ceil((r+65)/512),n=new Uint8Array(s/8);n.set(t),n[t.length]=128,reverse_endianness(n);const a=new Uint32Array(n.buffer);return a[a.length-2]=Math.floor(r/4294967296),a[a.length-1]=r,a}__name(precompute,"precompute"),__name(reverse_endianness,"reverse_endianness"),__name(encode,"encode");const te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");function base64(e){const t=e.length;let r,s="";for(r=2;r<t;r+=3)s+=te[e[r-2]>>2],s+=te[(3&e[r-2])<<4|e[r-1]>>4],s+=te[(15&e[r-1])<<2|e[r]>>6],s+=te[63&e[r]];return r===t+1&&(s+=te[e[r-2]>>2],s+=te[(3&e[r-2])<<4],s+="=="),r===t&&(s+=te[e[r-2]>>2],s+=te[(3&e[r-2])<<4|e[r-1]>>4],s+=te[(15&e[r-1])<<2],s+="="),s}__name(base64,"base64");const re=new Uint8Array(16);function generate_nonce(){return crypto.getRandomValues(re),base64(re)}__name(generate_nonce,"generate_nonce");const se=new Set(["self","unsafe-eval","unsafe-hashes","unsafe-inline","none","strict-dynamic","report-sample","wasm-unsafe-eval","script"]),ne=/^(nonce|sha\d\d\d)-/;class BaseProvider{static{__name(this,"BaseProvider");}#e;#t;#r;#s;#n;#a;#o;#i;#c;#d;#l;#u;#p;#_;#h;constructor(e,t,r){this.#e=e,this.#c=t;const s=this.#c;this.#d=[],this.#l=[],this.#u=[],this.#p=[],this.#_=[];const n=s["script-src"]||s["default-src"],a=s["script-src-elem"],o=s["style-src"]||s["default-src"],i=s["style-src-attr"],c=s["style-src-elem"],d=__name((e=>!!e&&!e.some((e=>"unsafe-inline"===e))),"needs_csp");this.#r=d(n),this.#s=d(a),this.#a=d(o),this.#o=d(i),this.#i=d(c),this.#t=this.#r||this.#s,this.#n=this.#a||this.#o||this.#i,this.script_needs_nonce=this.#t&&!this.#e,this.style_needs_nonce=this.#n&&!this.#e,this.#h=r;}add_script(e){if(!this.#t)return;const t=this.#e?`sha256-${sha256(e)}`:`nonce-${this.#h}`;this.#r&&this.#d.push(t),this.#s&&this.#l.push(t);}add_style(e){if(!this.#n)return;const t=this.#e?`sha256-${sha256(e)}`:`nonce-${this.#h}`;if(this.#a&&this.#u.push(t),this.#o&&this.#p.push(t),this.#i){const e="sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=",r=this.#c;!r["style-src-elem"]||r["style-src-elem"].includes(e)||this.#_.includes(e)||this.#_.push(e),t!==e&&this.#_.push(t);}}get_header(e=false){const t=[],r={...this.#c};this.#u.length>0&&(r["style-src"]=[...r["style-src"]||r["default-src"]||[],...this.#u]),this.#p.length>0&&(r["style-src-attr"]=[...r["style-src-attr"]||[],...this.#p]),this.#_.length>0&&(r["style-src-elem"]=[...r["style-src-elem"]||[],...this.#_]),this.#d.length>0&&(r["script-src"]=[...r["script-src"]||r["default-src"]||[],...this.#d]),this.#l.length>0&&(r["script-src-elem"]=[...r["script-src-elem"]||[],...this.#l]);for(const s in r){if(e&&("frame-ancestors"===s||"report-uri"===s||"sandbox"===s))continue;const n=r[s];if(!n)continue;const a=[s];Array.isArray(n)&&n.forEach((e=>{se.has(e)||ne.test(e)?a.push(`'${e}'`):a.push(e);})),t.push(a.join(" "));}return t.join("; ")}}class CspProvider extends BaseProvider{static{__name(this,"CspProvider");}get_meta(){const e=this.get_header(true);if(e)return `<meta http-equiv="content-security-policy" content="${escape_html(e,true)}">`}}class CspReportOnlyProvider extends BaseProvider{static{__name(this,"CspReportOnlyProvider");}constructor(e,t,r){if(super(e,t,r),Object.values(t).filter((e=>!!e)).length>0){const e=t["report-to"]?.length??false,r=t["report-uri"]?.length??false;if(!e&&!r)throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both")}}}class Csp{static{__name(this,"Csp");}nonce=generate_nonce();csp_provider;report_only_provider;constructor({mode:e,directives:t,reportOnly:r},{prerender:s}){const n="hash"===e||"auto"===e&&s;this.csp_provider=new CspProvider(n,t,this.nonce),this.report_only_provider=new CspReportOnlyProvider(n,r,this.nonce);}get script_needs_nonce(){return this.csp_provider.script_needs_nonce||this.report_only_provider.script_needs_nonce}get style_needs_nonce(){return this.csp_provider.style_needs_nonce||this.report_only_provider.style_needs_nonce}add_script(e){this.csp_provider.add_script(e),this.report_only_provider.add_script(e);}add_style(e){this.csp_provider.add_style(e),this.report_only_provider.add_style(e);}}function defer(){let e,t;return {promise:new Promise(((r,s)=>{e=r,t=s;})),fulfil:e,reject:t}}function create_async_iterator(){const e=[defer()];return {iterator:{[Symbol.asyncIterator]:()=>({next:__name((async()=>{const t=await e[0].promise;return t.done||e.shift(),t}),"next")})},push:__name((t=>{e[e.length-1].fulfil({value:t,done:false}),e.push(defer());}),"push"),done:__name((()=>{e[e.length-1].fulfil({done:true});}),"done")}}function exec(e,t,r){const s={},n=e.slice(1),a=n.filter((e=>void 0!==e));let o=0;for(let i=0;i<t.length;i+=1){const e=t[i];let c=n[i-o];if(e.chained&&e.rest&&o&&(c=n.slice(i-o,i+1).filter((e=>e)).join("/"),o=0),void 0!==c)if(e.matcher&&!r[e.matcher](c)){if(!e.optional||!e.chained)return;o++;}else {s[e.name]=c;const r=t[i+1],d=n[i+1];r&&!r.rest&&r.optional&&d&&e.chained&&(o=0),r||d||Object.keys(s).length!==a.length||(o=0);}else e.rest&&(s[e.name]="");}if(!o)return s}function generate_route_object(e,t,r){const{errors:s,layouts:n,leaf:a}=e,o=[...s,...n.map((e=>e?.[1])),a[1]].filter((e=>"number"==typeof e)).map((e=>`'${e}': () => ${create_client_import(r._.client.nodes?.[e],t)}`)).join(",\n\t\t");return [`{\n\tid: ${X(e.id)}`,`errors: ${X(e.errors)}`,`layouts: ${X(e.layouts)}`,`leaf: ${X(e.leaf)}`,`nodes: {\n\t\t${o}\n\t}\n}`].join(",\n\t")}function create_client_import(e,t){if(!e)return "Promise.resolve({})";if("/"===e[0])return `import('${e}')`;if(""!==k)return `import('${k}/${e}')`;let n=get_relative_path(t.pathname,`${w}/${e}`);return "."!==n[0]&&(n=`./${n}`),`import('${n}')`}async function resolve_route(e,t,r){if(!r._.client.routes)return text("Server-side route resolution disabled",{status:400});let s=null,n={};const a=await r._.matchers();for(const o of r._.client.routes){const t=o.pattern.exec(e);if(!t)continue;const r=exec(t,o.params,a);if(r){s=o,n=decode_params(r);break}}return create_server_routing_response(s,n,t,r).response}function create_server_routing_response(e,t,r,s){const n=new Headers({"content-type":"application/javascript; charset=utf-8"});if(e){const a=generate_route_object(e,r,s),o=`${create_css_import(e,r,s)}\nexport const route = ${a}; export const params = ${JSON.stringify(t)};`;return {response:text(o,{headers:n}),body:o}}return {response:text("",{headers:n}),body:""}}function create_css_import(e,t,n){const{errors:a,layouts:o,leaf:i}=e;let c="";for(const d of [...a,...o.map((e=>e?.[1])),i[1]]){if("number"!=typeof d)continue;const e=n._.client.css?.[d];for(const t of e??[])c+=`'${k||w}/${t}',`;}return c?`${create_client_import(n._.client.start,t)}.then(x => x.load_css([${c}]));`:""}__name(defer,"defer"),__name(create_async_iterator,"create_async_iterator"),__name(exec,"exec"),__name(generate_route_object,"generate_route_object"),__name(create_client_import,"create_client_import"),__name(resolve_route,"resolve_route"),__name(create_server_routing_response,"create_server_routing_response"),__name(create_css_import,"create_css_import");const ae={...readable(false),check:__name((()=>false),"check")},oe=new TextEncoder;async function render_response({branch:e,fetched:t,options:d,manifest:l,state:u,page_config:p,status:_,error:h=null,event:f,resolve_opts:m,action_result:y}){if(u.prerendering){if("nonce"===d.csp.mode)throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');if(d.app_template_contains_nonce)throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%")}const{client:v}=l._,w$1=new Set(v.imports),b=new Set(v.stylesheets),x=new Set(v.fonts),$=new Set,j=new Map;let k$1;const E="success"===y?.type||"failure"===y?.type?y.data??null:null;let R=w,S$1=k,q$1=X(w);if(u.prerendering?.fallback)d.hash_routing&&(q$1="new URL('.', location).pathname.slice(0, -1)");else {R=f.url.pathname.slice(w.length).split("/").slice(2).map((()=>"..")).join("/")||".",q$1=`new URL(${X(R)}, location).pathname.slice(0, -1)`,(!k||"/"===k[0]&&"/_svelte_kit_assets"!==k)&&(S$1=R);}if(p.ssr){const t={stores:{page:writable(null),navigating:writable(null),updated:ae},constructors:await Promise.all(e.map((({node:e})=>{if(!e.component)throw new Error(`Missing +page.svelte component for route ${f.route.id}`);return e.component()}))),form:E};let r={};for(let n=0;n<e.length;n+=1)r={...r,...e[n].data},t[`data_${n}`]=r;t.page={error:h,params:f.params,route:f.route,status:_,url:f.url,data:r,form:E,state:{}},override({base:R,assets:S$1});const s={context:new Map([["__request__",{page:t.page}]])};try{k$1=d.root.render(t,s);}finally{reset();}for(const{node:n}of e){for(const e of n.imports)w$1.add(e);for(const e of n.stylesheets)b.add(e);for(const e of n.fonts)x.add(e);n.inline_styles&&!v.inline&&Object.entries(await n.inline_styles()).forEach((([e,t])=>j.set(e,t)));}}else k$1={head:"",html:"",css:{code:"",map:null}};let P="",T=k$1.html;const A=new Csp(d.csp,{prerender:!!u.prerendering}),C=__name((e=>e.startsWith("/")?w+e:`${S$1}/${e}`),"prefixed"),H=v.inline?v.inline?.style:Array.from(j.values()).join("\n");if(H){const e=[];A.style_needs_nonce&&e.push(` nonce="${A.nonce}"`),A.add_style(H),P+=`\n\t<style${e.join("")}>${H}</style>`;}for(const r of b){const e=C(r),t=['rel="stylesheet"'];if(j.has(r))t.push("disabled",'media="(max-width: 0)"');else if(m.preload({type:"css",path:e})){const t=['rel="preload"','as="style"'];$.add(`<${encodeURI(e)}>; ${t.join(";")}; nopush`);}P+=`\n\t\t<link href="${e}" ${t.join(" ")}>`;}for(const r of x){const e=C(r);if(m.preload({type:"font",path:e})){P+=`\n\t\t<link ${['rel="preload"','as="font"',`type="font/${r.slice(r.lastIndexOf(".")+1)}"`,`href="${e}"`,"crossorigin"].join(" ")}>`;}}const z=`__sveltekit_${d.version_hash}`,{data:U,chunks:N}=get_data(f,d,e.map((e=>e.server_data)),A,z);if(p.ssr&&p.csr&&(T+=`\n\t\t\t${t.map((e=>serialize_data(e,m.filterSerializedResponseHeaders,!!u.prerendering))).join("\n\t\t\t")}`),p.csr){const t=l._.client.routes?.find((e=>e.id===f.route.id))??null;if(v.uses_env_dynamic_public&&u.prerendering&&w$1.add(`${C$1}/env.js`),!v.inline){const e=Array.from(w$1,(e=>C(e))).filter((e=>m.preload({type:"js",path:e})));for(const t of e)$.add(`<${encodeURI(t)}>; rel="modulepreload"; nopush`),"modulepreload"!==d.preload_strategy?P+=`\n\t\t<link rel="preload" as="script" crossorigin="anonymous" href="${t}">`:u.prerendering&&(P+=`\n\t\t<link rel="modulepreload" href="${t}">`);}if(l._.client.routes&&u.prerendering&&!u.prerendering.fallback){const e=add_resolution_suffix(f.url.pathname);u.prerendering.dependencies.set(e,create_server_routing_response(t,f.params,new URL(e,f.url),l));}const s=[],o=v.uses_env_dynamic_public&&u.prerendering,i=[`base: ${q$1}`];k&&i.push(`assets: ${X(k)}`),v.uses_env_dynamic_public&&i.push(`env: ${o?"null":X(S)}`),N&&(s.push("const deferred = new Map();"),i.push("defer: (id) => new Promise((fulfil, reject) => {\n\t\t\t\t\t\t\tdeferred.set(id, { fulfil, reject });\n\t\t\t\t\t\t})"),i.push("resolve: ({ id, data, error }) => {\n\t\t\t\t\t\t\tconst try_to_resolve = () => {\n\t\t\t\t\t\t\t\tif (!deferred.has(id)) {\n\t\t\t\t\t\t\t\t\tsetTimeout(try_to_resolve, 0);\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tconst { fulfil, reject } = deferred.get(id);\n\t\t\t\t\t\t\t\tdeferred.delete(id);\n\t\t\t\t\t\t\t\tif (error) reject(error);\n\t\t\t\t\t\t\t\telse fulfil(data);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\ttry_to_resolve();\n\t\t\t\t\t\t}")),s.push(`${z} = {\n\t\t\t\t\t\t${i.join(",\n\t\t\t\t\t\t")}\n\t\t\t\t\t};`);const c=["element"];if(s.push("const element = document.currentScript.parentElement;"),p.ssr){const r={form:"null",error:"null"};E&&(r.form=uneval_action_response(E,f.route.id,d.hooks.transport)),h&&(r.error=uneval(h));const s=[`node_ids: [${e.map((({node:e})=>e.index)).join(", ")}]`,`data: ${U}`,`form: ${r.form}`,`error: ${r.error}`];if(200!==_&&s.push(`status: ${_}`),l._.client.routes){if(t){const e=generate_route_object(t,f.url,l).replaceAll("\n","\n\t\t\t\t\t\t\t");s.push(`params: ${uneval(f.params)}`,`server_route: ${e}`);}}else d.embedded&&s.push(`params: ${uneval(f.params)}`,`route: ${X(f.route)}`);const n="\t".repeat(o?7:6);c.push(`{\n${n}\t${s.join(`,\n${n}\t`)}\n${n}}`);}const y=v.inline?`${v.inline.script}\n\n\t\t\t\t\t__sveltekit_${d.version_hash}.app.start(${c.join(", ")});`:v.app?`Promise.all([\n\t\t\t\t\t\timport(${X(C(v.start))}),\n\t\t\t\t\t\timport(${X(C(v.app))})\n\t\t\t\t\t]).then(([kit, app]) => {\n\t\t\t\t\t\tkit.start(app, ${c.join(", ")});\n\t\t\t\t\t});`:`import(${X(C(v.start))}).then((app) => {\n\t\t\t\t\t\tapp.start(${c.join(", ")})\n\t\t\t\t\t});`;if(o?s.push(`import(${X(`${R}/${C$1}/env.js`)}).then(({ env }) => {\n\t\t\t\t\t\t${z}.env = env;\n\n\t\t\t\t\t\t${y.replace(/\n/g,"\n\t")}\n\t\t\t\t\t});`):s.push(y),d.service_worker){const e="";s.push(`if ('serviceWorker' in navigator) {\n\t\t\t\t\t\taddEventListener('load', function () {\n\t\t\t\t\t\t\tnavigator.serviceWorker.register('${C("service-worker.js")}'${e});\n\t\t\t\t\t\t});\n\t\t\t\t\t}`);}const b=`\n\t\t\t\t{\n\t\t\t\t\t${s.join("\n\n\t\t\t\t\t")}\n\t\t\t\t}\n\t\t\t`;A.add_script(b),T+=`\n\t\t\t<script${A.script_needs_nonce?` nonce="${A.nonce}"`:""}>${b}<\/script>\n\t\t`;}const L=new Headers({"x-sveltekit-page":"true","content-type":"text/html"});if(u.prerendering){const e=[],t=A.csp_provider.get_meta();t&&e.push(t),u.prerendering.cache&&e.push(`<meta http-equiv="cache-control" content="${u.prerendering.cache}">`),e.length>0&&(P=e.join("\n")+P);}else {const e=A.csp_provider.get_header();e&&L.set("content-security-policy",e);const t=A.report_only_provider.get_header();t&&L.set("content-security-policy-report-only",t),$.size&&L.set("link",Array.from($).join(", "));}P+=k$1.head;const W=d.templates.app({head:P,body:T,assets:S$1,nonce:A.nonce,env:q}),D=await m.transformPageChunk({html:W,done:true})||"";return N||L.set("etag",`"${hash(D)}"`),N?new Response(new ReadableStream({async start(e){e.enqueue(oe.encode(D+"\n"));for await(const t of N)e.enqueue(oe.encode(t));e.close();},type:"bytes"}),{headers:L}):text(D,{status:_,headers:L})}function get_data(e,t,r,s,n){let a=1,o=0;const{iterator:i,push:c,done:d}=create_async_iterator();function replacer(r){if("function"==typeof r?.then){const i=a++;return o+=1,r.then((e=>({data:e}))).catch((async r=>({error:await handle_error_and_jsonify(e,t,r)}))).then((async({data:r,error:a})=>{let l;o-=1;try{l=uneval({id:i,data:r,error:a},replacer);}catch{a=await handle_error_and_jsonify(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`)),r=void 0,l=uneval({id:i,data:r,error:a},replacer);}const u=s.script_needs_nonce?` nonce="${s.nonce}"`:"";c(`<script${u}>${n}.resolve(${l})<\/script>\n`),0===o&&d();})),`${n}.defer(${i})`}for(const e in t.hooks.transport){const s=t.hooks.transport[e].encode(r);if(s)return `app.decode('${e}', ${uneval(s,replacer)})`}}__name(replacer,"replacer");try{return {data:`[${r.map((e=>{if(!e)return "null";const t={type:"data",data:e.data,uses:serialize_uses(e)};return e.slash&&(t.slash=e.slash),uneval(t,replacer)})).join(",")}]`,chunks:o>0?i:null}}catch(l){throw l.path=l.path.slice(1),new Error(clarify_devalue_error(e,l))}}__name(render_response,"render_response"),__name(get_data,"get_data");class PageNodes{static{__name(this,"PageNodes");}data;constructor(e){this.data=e;}layouts(){return this.data.slice(0,-1)}page(){return this.data.at(-1)}validate(){for(const t of this.layouts())t&&(c(t.server,t.server_id),i$1(t.universal,t.universal_id));const e=this.page();e&&(d(e.server,e.server_id),l$1(e.universal,e.universal_id));}#f(e){return this.data.reduce(((t,r)=>r?.universal?.[e]??r?.server?.[e]??t),void 0)}csr(){return this.#f("csr")??true}ssr(){return this.#f("ssr")??true}prerender(){return this.#f("prerender")??false}trailing_slash(){return this.#f("trailingSlash")??"never"}get_config(){let e={};for(const t of this.data)(t?.universal?.config||t?.server?.config)&&(e={...e,...t?.universal?.config,...t?.server?.config});return Object.keys(e).length?e:void 0}should_prerender_data(){return this.data.some((e=>e?.server?.load||void 0!==e?.server?.trailingSlash))}}async function respond_with_error({event:e,options:t,manifest:r,state:s,status:n,error:a,resolve_opts:o}){if(e.request.headers.get("x-sveltekit-error"))return static_error_page(t,n,a.message);const i=[];try{const c=[],d=await r._.nodes[0](),l=new PageNodes([d]),u=l.ssr(),p=l.csr();if(u){s.error=!0;const t=load_server_data({event:e,state:s,node:d,parent:__name((async()=>({})),"parent")}),n=await t,a=await load_data({event:e,fetched:i,node:d,parent:__name((async()=>({})),"parent"),resolve_opts:o,server_data_promise:t,state:s,csr:p});c.push({node:d,server_data:n,data:a},{node:await r._.nodes[1](),data:null,server_data:null});}return await render_response({options:t,manifest:r,state:s,page_config:{ssr:u,csr:p},status:n,error:await handle_error_and_jsonify(e,t,a),branch:c,fetched:i,event:e,resolve_opts:o})}catch(c){return c instanceof Redirect?redirect_response(c.status,c.location):static_error_page(t,get_status(c),(await handle_error_and_jsonify(e,t,c)).message)}}function once(e){let t,r=false;return ()=>r?t:(r=true,t=e())}__name(respond_with_error,"respond_with_error"),__name(once,"once");const ie=new TextEncoder;async function render_data(e,t,r,s,n,a,o){if(!t.page)return new Response(void 0,{status:404});try{const i=[...t.page.layouts,t.page.leaf],c=a??i.map((()=>!0));let d=!1;const l=new URL(e.url);l.pathname=normalize_path(l.pathname,o);const u={...e,url:l},p=i.map(((e,t)=>once((async()=>{try{if(d)return {type:"skip"};const r=null==e?e:await s._.nodes[e]();return load_server_data({event:u,state:n,node:r,parent:__name((async()=>{const e={};for(let r=0;r<t;r+=1){const t=await p[r]();t&&Object.assign(e,t.data);}return e}),"parent")})}catch(r){throw d=!0,r}})))),_=p.map((async(e,t)=>c[t]?e():{type:"skip"}));let h=_.length;const f=await Promise.all(_.map(((t,s)=>t.catch((async t=>{if(t instanceof Redirect)throw t;return h=Math.min(h,s+1),{type:"error",error:await handle_error_and_jsonify(e,r,t),status:t instanceof HttpError||t instanceof SvelteKitError?t.status:void 0}}))))),{data:m,chunks:g}=get_data_json(e,r,f);return g?new Response(new ReadableStream({async start(e){e.enqueue(ie.encode(m));for await(const t of g)e.enqueue(ie.encode(t));e.close();},type:"bytes"}),{headers:{"content-type":"text/sveltekit-data","cache-control":"private, no-store"}}):json_response(m)}catch(i){const t=i;return t instanceof Redirect?redirect_json_response(t):json_response(await handle_error_and_jsonify(e,r,t),500)}}function json_response(e,t=200){return text("string"==typeof e?e:JSON.stringify(e),{status:t,headers:{"content-type":"application/json","cache-control":"private, no-store"}})}function redirect_json_response(e){return json_response({type:"redirect",location:e.location})}function get_data_json(e,t,r){let s=1,n=0;const{iterator:a,push:o,done:i}=create_async_iterator(),c={...Object.fromEntries(Object.entries(t.hooks.transport).map((([e,t])=>[e,t.encode]))),Promise:__name((r=>{if("function"==typeof r?.then){const a=s++;n+=1;let d="data";return r.catch((async r=>(d="error",handle_error_and_jsonify(e,t,r)))).then((async r=>{let s;try{s=stringify(r,c);}catch{const r=await handle_error_and_jsonify(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`));d="error",s=stringify(r,c);}n-=1,o(`{"type":"chunk","id":${a},"${d}":${s}}\n`),0===n&&i();})),a}}),"Promise")};try{return {data:`{"type":"data","nodes":[${r.map((e=>e?"error"===e.type||"skip"===e.type?JSON.stringify(e):`{"type":"data","data":${stringify(e.data,c)},"uses":${JSON.stringify(serialize_uses(e))}${e.slash?`,"slash":${JSON.stringify(e.slash)}`:""}}`:"null")).join(",")}]}\n`,chunks:n>0?a:null}}catch(d){throw d.path="data"+d.path,new Error(clarify_devalue_error(e,d))}}__name(render_data,"render_data"),__name(json_response,"json_response"),__name(redirect_json_response,"redirect_json_response"),__name(get_data_json,"get_data_json");async function render_page(e,r,s,n,a,o,i){if(a.depth>10)return text(`Not found: ${e.url.pathname}`,{status:404});if(is_action_json_request(e)){const t=await n._.nodes[r.leaf]();return handle_action_json_request(e,s,t?.server)}try{const d=o.page();let l,u=200;if(is_action_request(e)){if(l=await handle_action_request(e,d.server),"redirect"===l?.type)return redirect_response(l.status,l.location);"error"===l?.type&&(u=get_status(l.error)),"failure"===l?.type&&(u=l.status);}const p=o.prerender();if(p){const e=d.server;if(e?.actions)throw new Error("Cannot prerender pages with actions")}else if(a.prerendering)return new Response(void 0,{status:204});a.prerender_default=p;const _=o.should_prerender_data(),h=add_data_suffix(e.url.pathname),f=[],m=o.ssr(),g=o.csr();if(!(!1!==m||a.prerendering&&_))return o$1&&l&&e.request.headers.has("x-sveltekit-action"),await render_response({branch:[],fetched:f,page_config:{ssr:!1,csr:g},status:u,error:null,event:e,options:s,manifest:n,state:a,resolve_opts:i});const y=[];let v=null;const w=o.data.map(((t,r)=>{if(v)throw v;return Promise.resolve().then((async()=>{try{if(t===d&&"error"===l?.type)throw l.error;return await load_server_data({event:e,state:a,node:t,parent:__name((async()=>{const e={};for(let t=0;t<r;t+=1){const r=await w[t];r&&Object.assign(e,r.data);}return e}),"parent")})}catch(s){throw v=s,v}}))})),b=o.data.map(((t,r)=>{if(v)throw v;return Promise.resolve().then((async()=>{try{return await load_data({event:e,fetched:f,node:t,parent:__name((async()=>{const e={};for(let t=0;t<r;t+=1)Object.assign(e,await b[t]);return e}),"parent"),resolve_opts:i,server_data_promise:w[r],state:a,csr:g})}catch(s){throw v=s,v}}))}));for(const e of w)e.catch((()=>{}));for(const e of b)e.catch((()=>{}));for(let t=0;t<o.data.length;t+=1){const d=o.data[t];if(d)try{const e=await w[t],r=await b[t];y.push({node:d,server_data:e,data:r});}catch(c){const o=c;if(o instanceof Redirect){if(a.prerendering&&_){const e=JSON.stringify({type:"redirect",location:o.location});a.prerendering.dependencies.set(h,{response:text(e),body:e});}return redirect_response(o.status,o.location)}const d=get_status(o),l=await handle_error_and_jsonify(e,s,o);for(;t--;)if(r.errors[t]){const o=r.errors[t],c=await n._.nodes[o]();let u=t;for(;!y[u];)u-=1;const p=compact(y.slice(0,u+1)),_=new PageNodes(p.map((e=>e.node)));return await render_response({event:e,options:s,manifest:n,state:a,resolve_opts:i,page_config:{ssr:_.ssr(),csr:_.csr()},status:d,error:l,branch:p.concat({node:c,data:null,server_data:null}),fetched:f})}return static_error_page(s,d,l.message)}else y.push(null);}if(a.prerendering&&_){let{data:t,chunks:r}=get_data_json(e,s,y.map((e=>e?.server_data)));if(r)for await(const e of r)t+=e;a.prerendering.dependencies.set(h,{response:text(t),body:t});}return await render_response({event:e,options:s,manifest:n,state:a,resolve_opts:i,page_config:{csr:g,ssr:m},status:u,error:null,branch:!1===m?[]:compact(y),action_result:l,fetched:f})}catch(c){return await respond_with_error({event:e,options:s,manifest:n,state:a,status:500,error:c,resolve_opts:i})}}__name(render_page,"render_page");const ce=/[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;function validate_options(e){if(void 0===e?.path)throw new Error("You must specify a `path` when setting, deleting or serializing cookies")}function get_cookies(e,t){const r=e.headers.get("cookie")??"",s=cookieExports.parse(r,{decode:__name((e=>e),"decode")});let n;const a={},o={httpOnly:true,sameSite:"lax",secure:"localhost"!==t.hostname||"http:"!==t.protocol},i={get(e,s){const n=a[e];if(n&&domain_matches(t.hostname,n.options.domain)&&path_matches(t.pathname,n.options.path))return n.value;return cookieExports.parse(r,{decode:s?.decode})[e]},getAll(e){const s=cookieExports.parse(r,{decode:e?.decode});for(const r of Object.values(a))domain_matches(t.hostname,r.options.domain)&&path_matches(t.pathname,r.options.path)&&(s[r.name]=r.value);return Object.entries(s).map((([e,t])=>({name:e,value:t})))},set(e,t,r){const s=e.match(ce);s&&console.warn(`The cookie name "${e}" will be invalid in SvelteKit 3.0 as it contains ${s.join(" and ")}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`),validate_options(r),set_internal(e,t,{...o,...r});},delete(e,t){validate_options(t),i.set(e,"",{...t,maxAge:0});},serialize(e,r,s){validate_options(s);let a=s.path;if(!s.domain||s.domain===t.hostname){if(!n)throw new Error("Cannot serialize cookies until after the route is determined");a=resolve(n,a);}return cookieExports.serialize(e,r,{...o,...s,path:a})}};function get_cookie_header(e,t){const r={...s};for(const s in a){const t=a[s];if(!domain_matches(e.hostname,t.options.domain))continue;if(!path_matches(e.pathname,t.options.path))continue;const n=t.options.encode||encodeURIComponent;r[t.name]=n(t.value);}if(t){const e=cookieExports.parse(t,{decode:__name((e=>e),"decode")});for(const t in e)r[t]=e[t];}return Object.entries(r).map((([e,t])=>`${e}=${t}`)).join("; ")}__name(get_cookie_header,"get_cookie_header");const c=[];function set_internal(e,r,s){if(!n)return void c.push((()=>set_internal(e,r,s)));let o=s.path;s.domain&&s.domain!==t.hostname||(o=resolve(n,o)),a[e]={name:e,value:r,options:{...s,path:o}};}function set_trailing_slash(e){n=normalize_path(t.pathname,e),c.forEach((e=>e()));}return __name(set_internal,"set_internal"),__name(set_trailing_slash,"set_trailing_slash"),{cookies:i,new_cookies:a,get_cookie_header:get_cookie_header,set_internal:set_internal,set_trailing_slash:set_trailing_slash}}function domain_matches(e,t){if(!t)return  true;const r="."===t[0]?t.slice(1):t;return e===r||e.endsWith("."+r)}function path_matches(e,t){if(!t)return  true;const r=t.endsWith("/")?t.slice(0,-1):t;return e===r||e.startsWith(r+"/")}function add_cookies_to_headers(e,t){for(const r of t){const{name:t,value:s,options:n}=r;if(e.append("set-cookie",cookieExports.serialize(t,s,n)),n.path.endsWith(".html")){const r=add_data_suffix(n.path);e.append("set-cookie",cookieExports.serialize(t,s,{...n,path:r}));}}}function create_fetch({event:e,options:t,manifest:n,state:a,get_cookie_header:o,set_internal:i}){const c=__name((async(c,l)=>{const u=normalize_fetch_input(c,l,e.url);let p=(c instanceof Request?c.mode:l?.mode)??"cors",_=(c instanceof Request?c.credentials:l?.credentials)??"same-origin";return t.hooks.handleFetch({event:e,request:u,fetch:__name((async(c,l)=>{const h=normalize_fetch_input(c,l,e.url),f=new URL(h.url);if(h.headers.has("origin")||h.headers.set("origin",e.url.origin),c!==u&&(p=(c instanceof Request?c.mode:l?.mode)??"cors",_=(c instanceof Request?c.credentials:l?.credentials)??"same-origin"),"GET"!==h.method&&"HEAD"!==h.method||("no-cors"!==p||f.origin===e.url.origin)&&f.origin!==e.url.origin||h.headers.delete("origin"),f.origin!==e.url.origin){if(`.${f.hostname}`.endsWith(`.${e.url.hostname}`)&&"omit"!==_){const e=o(f,h.headers.get("cookie"));e&&h.headers.set("cookie",e);}return fetch(h)}const m=k||w,g=decodeURIComponent(f.pathname),y=(g.startsWith(m)?g.slice(m.length):g).slice(1),v=`${y}/index.html`,w$1=n.assets.has(y)||y in n._.server_assets,b=n.assets.has(v)||v in n._.server_assets;if(w$1||b){const e=w$1?y:v;if(a.read){const t=w$1?n.mimeTypes[y.slice(y.lastIndexOf("."))]:"text/html";return new Response(a.read(e),{headers:t?{"content-type":t}:{}})}if(he$1&&e in n._.server_assets){const t=n._.server_assets[e],r=n.mimeTypes[e.slice(e.lastIndexOf("."))];return new Response(he$1(e),{headers:{"Content-Length":""+t,"Content-Type":r}})}return await fetch(h)}if(has_prerendered_path(n,w+g))return await fetch(h);if("omit"!==_){const t=o(f,h.headers.get("cookie"));t&&h.headers.set("cookie",t);const r=e.request.headers.get("authorization");r&&!h.headers.has("authorization")&&h.headers.set("authorization",r);}h.headers.has("accept")||h.headers.set("accept","*/*"),h.headers.has("accept-language")||h.headers.set("accept-language",e.request.headers.get("accept-language"));const x=await internal_fetch(h,t,n,a),$=x.headers.get("set-cookie");if($)for(const e of setCookieExports.splitCookiesString($)){const{name:t,value:r,...s}=setCookieExports.parseString(e,{decodeValues:false}),n=s.path??(f.pathname.split("/").slice(0,-1).join("/")||"/");i(t,r,{path:n,encode:__name((e=>e),"encode"),...s});}return x}),"fetch")})}),"server_fetch");return (e,t)=>{const r=c(e,t);return r.catch((()=>{})),r}}function normalize_fetch_input(e,t,r){return e instanceof Request?e:new Request("string"==typeof e?new URL(e,r):e,t)}async function internal_fetch(e,t,r,s){if(e.signal){if(e.signal.aborted)throw new DOMException("The operation was aborted.","AbortError");let n=__name((()=>{}),"remove_abort_listener");const a=new Promise(((t,r)=>{const s=__name((()=>{r(new DOMException("The operation was aborted.","AbortError"));}),"on_abort");e.signal.addEventListener("abort",s,{once:true}),n=__name((()=>e.signal.removeEventListener("abort",s)),"remove_abort_listener");})),o=await Promise.race([respond(e,t,r,{...s,depth:s.depth+1}),a]);return n(),o}return await respond(e,t,r,{...s,depth:s.depth+1})}let de,le,ue;function get_public_env(e){return de??=`export const env=${JSON.stringify(S)}`,le??=`W/${Date.now()}`,ue??=new Headers({"content-type":"application/javascript; charset=utf-8",etag:le}),e.headers.get("if-none-match")===le?new Response(void 0,{status:304,headers:ue}):new Response(de,{headers:ue})}__name(validate_options,"validate_options"),__name(get_cookies,"get_cookies"),__name(domain_matches,"domain_matches"),__name(path_matches,"path_matches"),__name(add_cookies_to_headers,"add_cookies_to_headers"),__name(create_fetch,"create_fetch"),__name(normalize_fetch_input,"normalize_fetch_input"),__name(internal_fetch,"internal_fetch"),__name(get_public_env,"get_public_env");const pe=__name((({html:e})=>e),"default_transform"),_e=__name((()=>false),"default_filter"),he=__name((({type:e})=>"js"===e||"css"===e),"default_preload"),fe=new Set(["GET","HEAD","POST"]),me=new Set(["GET","HEAD","OPTIONS"]);async function respond(e,r,a,o){const i=new URL(e.url);if(r.csrf_check_origin){if(is_form_content_type(e)&&("POST"===e.method||"PUT"===e.method||"PATCH"===e.method||"DELETE"===e.method)&&e.headers.get("origin")!==i.origin){const t=new HttpError(403,`Cross-site ${e.method} form submissions are forbidden`);return "application/json"===e.headers.get("accept")?json(t.body,{status:t.status}):text(t.body.message,{status:t.status})}}if(r.hash_routing&&i.pathname!==w+"/"&&"/[fallback]"!==i.pathname)return text("Not found",{status:404});let c;const d=has_resolution_suffix(i.pathname),l=has_data_suffix(i.pathname);d?i.pathname=strip_resolution_suffix(i.pathname):l&&(i.pathname=strip_data_suffix(i.pathname)+("1"===i.searchParams.get(K)?"/":"")||"/",i.searchParams.delete(K),c=i.searchParams.get(G)?.split("").map((e=>"1"===e)),i.searchParams.delete(G));const u={},{cookies:p,new_cookies:_,get_cookie_header:h,set_internal:f,set_trailing_slash:m}=get_cookies(e,i),g={cookies:p,fetch:null,getClientAddress:o.getClientAddress||(()=>{throw new Error("@sveltejs/adapter-node does not specify getClientAddress. Please raise an issue")}),locals:{},params:{},platform:o.platform,request:e,route:{id:null},setHeaders:__name((e=>{for(const t in e){const r=t.toLowerCase(),s=e[t];if("set-cookie"===r)throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");if(r in u)throw new Error(`"${t}" header is already set`);u[r]=s,o.prerendering&&"cache-control"===r&&(o.prerendering.cache=s);}}),"setHeaders"),url:i,isDataRequest:l,isSubRequest:o.depth>0};let y;g.fetch=create_fetch({event:g,options:r,manifest:a,state:o,get_cookie_header:h,set_internal:f}),o.emulator?.platform&&(g.platform=await o.emulator.platform({config:{},prerender:!!o.prerendering?.fallback}));const b=o.prerendering?.inside_reroute;try{o.prerendering&&(o.prerendering.inside_reroute=!0),y=await r.hooks.reroute({url:new URL(i),fetch:g.fetch})??i.pathname;}catch{return text("Internal Server Error",{status:500})}finally{o.prerendering&&(o.prerendering.inside_reroute=b);}try{y=decode_pathname(y);}catch{return text("Malformed URI",{status:400})}if(y!==i.pathname&&!o.prerendering?.fallback&&has_prerendered_path(a,y)){const t=new URL(e.url);t.pathname=l?add_data_suffix(y):d?add_resolution_suffix(y):y;const r=await fetch(t,e),s=new Headers(r.headers);return s.has("content-encoding")&&(s.delete("content-encoding"),s.delete("content-length")),new Response(r.body,{headers:s,status:r.status,statusText:r.statusText})}let x=null;if(w&&!o.prerendering?.fallback){if(!y.startsWith(w))return text("Not found",{status:404});y=y.slice(w.length)||"/";}if(d)return resolve_route(y,new URL(e.url),a);if(y===`/${C$1}/env.js`)return get_public_env(e);if(y.startsWith(`/${C$1}`)){const e=new Headers;return e.set("cache-control","public, max-age=0, must-revalidate"),text("Not found",{status:404,headers:e})}if(!o.prerendering?.fallback){const e=await a._.matchers();for(const t of a._.routes){const r=t.pattern.exec(y);if(!r)continue;const s=exec(r,t.params,e);if(s){x=t,g.route={id:x.id},g.params=decode_params(s);break}}}let $={transformPageChunk:pe,filterSerializedResponseHeaders:_e,preload:he},j="never";try{const t=x?.page?new PageNodes(await load_page_nodes(x.page,a)):void 0;if(x){if(i.pathname===w||i.pathname===w+"/")j="always";else if(t)j=t.trailing_slash();else if(x.endpoint){const e=await x.endpoint();j=e.trailingSlash??"never";}if(!l){const e=normalize_path(i.pathname,j);if(e!==i.pathname&&!o.prerendering?.fallback)return new Response(void 0,{status:308,headers:{"x-sveltekit-normalize":"1",location:(e.startsWith("//")?i.origin+e:e)+("?"===i.search?"":i.search)}})}if(o.before_handle||o.emulator?.platform){let e={},r=!1;if(x.endpoint){const t=await x.endpoint();e=t.config??e,r=t.prerender??r;}else t&&(e=t.get_config()??e,r=t.prerender());o.before_handle&&o.before_handle(g,e,r),o.emulator?.platform&&(g.platform=await o.emulator.platform({config:e,prerender:r}));}}m(j),!o.prerendering||o.prerendering.fallback||o.prerendering.inside_reroute||disable_search(i);const n=await with_event(g,(()=>r.hooks.handle({event:g,resolve:__name(((e,r)=>with_event(null,(()=>resolve2(e,t,r).then((t=>{for(const e in u){const r=u[e];t.headers.set(e,r);}return add_cookies_to_headers(t.headers,Object.values(_)),o.prerendering&&null!==e.route.id&&t.headers.set("x-sveltekit-routeid",encodeURI(e.route.id)),t}))))),"resolve")})));if(200===n.status&&n.headers.has("etag")){let t=e.headers.get("if-none-match");t?.startsWith('W/"')&&(t=t.substring(2));const r=n.headers.get("etag");if(t===r){const e=new Headers({etag:r});for(const t of ["cache-control","content-location","date","expires","vary","set-cookie"]){const r=n.headers.get(t);r&&e.set(t,r);}return new Response(void 0,{status:304,headers:e})}}if(l&&n.status>=300&&n.status<=308){const e=n.headers.get("location");if(e)return redirect_json_response(new Redirect(n.status,e))}return n}catch(E){if(E instanceof Redirect){const e=l?redirect_json_response(E):x?.page&&is_action_json_request(g)?action_json_redirect(E):redirect_response(E.status,E.location);return add_cookies_to_headers(e.headers,Object.values(_)),e}return await handle_fatal_error(g,r,E)}async function resolve2(s,n,i){try{if(i&&($={transformPageChunk:i.transformPageChunk||pe,filterSerializedResponseHeaders:i.filterSerializedResponseHeaders||_e,preload:i.preload||he}),r.hash_routing||o.prerendering?.fallback)return await render_response({event:s,options:r,manifest:a,state:o,page_config:{ssr:!1,csr:!0},status:200,error:null,branch:[],fetched:[],resolve_opts:$});if(x){const t=s.request.method;let i;if(l)i=await render_data(s,x,r,a,o,c,j);else if(!x.endpoint||x.page&&!is_endpoint_request(s)){if(!x.page)throw new Error("Route is neither page nor endpoint. This should never happen");if(!n)throw new Error("page_nodes not found. This should never happen");if(fe.has(t))i=await render_page(s,x.page,r,a,o,n,$);else {const e=new Set(me),r=await a._.nodes[x.page.leaf]();if(r?.server?.actions&&e.add("POST"),"OPTIONS"===t)i=new Response(null,{status:204,headers:{allow:Array.from(e.values()).join(", ")}});else {i=method_not_allowed([...e].reduce(((e,t)=>(e[t]=!0,e)),{}),t);}}}else i=await render_endpoint(s,await x.endpoint(),o);if("GET"===e.method&&x.page&&x.endpoint){const e=i.headers.get("vary")?.split(",")?.map((e=>e.trim().toLowerCase()));e?.includes("accept")||e?.includes("*")||(i=new Response(i.body,{status:i.status,statusText:i.statusText,headers:new Headers(i.headers)}),i.headers.append("Vary","Accept"));}return i}if(o.error&&s.isSubRequest){const t=new Headers(e.headers);return t.set("x-sveltekit-error","true"),await fetch(e,{headers:t})}return o.error?text("Internal Server Error",{status:500}):0===o.depth?(o$1&&s.url.pathname,await respond_with_error({event:s,options:r,manifest:a,state:o,status:404,error:new SvelteKitError(404,"Not Found",`Not found: ${s.url.pathname}`),resolve_opts:$})):o.prerendering?text("not found",{status:404}):await fetch(e)}catch(E){return await handle_fatal_error(s,r,E)}finally{s.cookies.set=()=>{throw new Error("Cannot use `cookies.set(...)` after the response has been generated")},s.setHeaders=()=>{throw new Error("Cannot use `setHeaders(...)` after the response has been generated")};}}__name(resolve2,"resolve");}function load_page_nodes(e,t){return Promise.all([...e.layouts.map((e=>null==e?e:t._.nodes[e]())),t._.nodes[e.leaf]()])}function filter_private_env(e,{public_prefix:t,private_prefix:r}){return Object.fromEntries(Object.entries(e).filter((([e])=>e.startsWith(r)&&(""===t||!e.startsWith(t)))))}function filter_public_env(e,{public_prefix:t,private_prefix:r}){return Object.fromEntries(Object.entries(e).filter((([e])=>e.startsWith(t)&&(""===r||!e.startsWith(r)))))}function set_app(e){}__name(respond,"respond"),__name(load_page_nodes,"load_page_nodes"),__name(filter_private_env,"filter_private_env"),__name(filter_public_env,"filter_public_env"),__name(set_app,"set_app");const ge={get({type:e},t){throw new Error(`Cannot read values from $env/dynamic/${e} while prerendering (attempted to read env.${t.toString()}). Use $env/static/${e} instead`)}};let ye;class Server{static{__name(this,"Server");}#m;#g;constructor(e){this.#m=me$1,this.#g=e;}async init({env:e,read:t}){const r={public_prefix:this.#m.env_public_prefix,private_prefix:this.#m.env_private_prefix},s=filter_private_env(e,r),n=filter_public_env(e,r);set_private_env(ge$1?new Proxy({type:"private"},ge):s),set_public_env(ge$1?new Proxy({type:"public"},ge):n),set_safe_public_env(n),t&&set_read_implementation(t),await(ye??=(async()=>{try{const e=await get_hooks();this.#m.hooks={handle:e.handle||(({event:e,resolve:t})=>t(e)),handleError:e.handleError||(({status:e,error:t})=>console.error(404===e&&t?.message||t)),handleFetch:e.handleFetch||(({request:e,fetch:t})=>t(e)),reroute:e.reroute||(()=>{}),transport:e.transport||{}},e.transport&&Object.fromEntries(Object.entries(e.transport).map((([e,t])=>[e,t.decode]))),e.init&&await e.init();}catch(e){throw e}})());}async respond(e,t){return respond(e,this.#m,this.#g,{...t,error:false,depth:0})}}

export { Server };
//# sourceMappingURL=index.js.map
