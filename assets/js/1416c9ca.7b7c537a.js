"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6942],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var c=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,c,n=function(e,a){if(null==e)return{};var t,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=c.createContext({}),s=function(e){var a=c.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return c.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},u=c.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return t?c.createElement(m,o(o({ref:a},p),{},{components:t})):c.createElement(m,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return c.createElement.apply(null,o)}return c.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9698:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var c=t(7462),n=t(3366),r=(t(7294),t(3905)),o=["components"],i={id:"compact_cache",title:"Compact cache"},l="Annoucement",s={unversionedId:"Cache_Library_User_Guides/compact_cache",id:"Cache_Library_User_Guides/compact_cache",isDocsHomePage:!1,title:"Compact cache",description:"This feature is in maintenance mode. All future development plans are dropped. We understand there is value in optimizing for very small payloads, but we think the correct direction is to reduce item overhead in the regular cache instead of adding small, separate caches that offer low space overhead. Please reach out to us directly if you have a strong need for a RAM cache optimized for very small items.",source:"@site/docs/Cache_Library_User_Guides/compact_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/compact_cache",permalink:"/docs/Cache_Library_User_Guides/compact_cache",editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_User_Guides/compact_cache.md",version:"current",frontMatter:{id:"compact_cache",title:"Compact cache"},sidebar:"someSidebar",previous:{title:"Chained items",permalink:"/docs/Cache_Library_User_Guides/chained_items"},next:{title:"Structured Cache",permalink:"/docs/Cache_Library_User_Guides/Structured_Cache"}},p=[{value:"Defining Compact Cache instance",id:"defining-compact-cache-instance",children:[]},{value:"Creating Compact Cache instance",id:"creating-compact-cache-instance",children:[]},{value:"Caching using Compact Cache",id:"caching-using-compact-cache",children:[]},{value:"Restoring an instance of Compact Cache",id:"restoring-an-instance-of-compact-cache",children:[]}],h={toc:p};function u(e){var a=e.components,t=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,c.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"annoucement"},"Annoucement"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This feature is in maintenance mode"),". All future development plans are dropped. We understand there is value in optimizing for very small payloads, but we think the correct direction is to reduce item overhead in the regular cache instead of adding small, separate caches that offer low space overhead. Please reach out to us directly if you have a strong need for a RAM cache optimized for very small items."),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Compact cache is optimal to cache ",(0,r.kt)("em",{parentName:"p"},"small key-value data"),", usually less than tens of bytes per entry. At compile time, the key must be fixed size, while the value can be fixed size or variable size or empty. Compact cache avoids the overhead (32 bytes per entry) incurred to an item stored in a regular cache. Compact cache has almost 0 bytes overhead for fixed size values. For variable sized entries, we pay a 3 byte overhead per bucket, and 4 bytes per entry. Compact cache is also a good alternative for ",(0,r.kt)("inlineCode",{parentName:"p"},"folly::EvictingCacheMap"),", which has an overhead of 24 bytes per entry. In general, these optimizations only matter when your cache size in hundreds of MB or higher."),(0,r.kt)("p",null,"To optimize for small values, compact cache makes a few trade-offs and API changes compared to regular cache: unlike regular cache where you get or set data in-place in the cache, compact cache always performs a copy. Copying small keys and values that are cache line sized (128 bytes) has similar performance characteristics to not copying and modifying in-place."),(0,r.kt)("p",null,"For more information, see cachelib/examples/simple_compact_cache/main.cpp"),(0,r.kt)("h2",{id:"defining-compact-cache-instance"},"Defining Compact Cache instance"),(0,r.kt)("p",null,"To get started, define the compact cache key type and value type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct MyKey {\n  int id; // Or your own POD fields.\n\n  // Key comparator.\n  bool operator==(const Key& other) const { return id == other.id; }\n\n  // Determine if an entry is empty. Choose a value that you are not going to cache.\n  bool isEmpty() const { return id == 0; }\n};\n\nstruct MyValue {\n  char[10] buf; // This can also be any variable length blob.\n};\n")),(0,r.kt)("p",null,"Then define different compact cache types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <cachelib/allocator/CCacheAllocator.hpp>\n#include <cachelib/compact_cache/CCacheCreator.h>\n\nusing FixedValueCCache = CCacheCreator<CCacheAllocator, Key, Value>::type;\nusing ZeroSizeValueCCache = CCacheCreator<CCacheAllocator, Key>::type;\n\n// compact cache with variable sized records\nconstexpr size_t kMaxSize = 128;\nusing VariableValueCCache = CCacheVariableCreator<CCacheAllocator, Key, kMaxSize>::type;\n")),(0,r.kt)("p",null,"The code shows how to create three different types of compact caches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FixedValueCCache"),"\nValues' sizes are fixed and must be defined at compile time by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," Type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VariableValueCCache"),"\nValues' sizes are varied, but less than a predefined maximum size."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZeroSizeValueCCache"),"\nUseful for storing keys that are not associated with any values.")),(0,r.kt)("h2",{id:"creating-compact-cache-instance"},"Creating Compact Cache instance"),(0,r.kt)("p",null,"After defining a compact cache type, you can start creating an instance of it from the main cache:"),(0,r.kt)("p",null,"Make sure that your cache config has the following enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"config.enableCompactCache(); // required to use compact cache\n")),(0,r.kt)("p",null,"Then use the defined compact cache type to create a compact cache instance. Assume ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCacheType")," is the type that you defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// interface detail can be found in cachelib/allocator/CacheAllocator.hpp\nauto* ccache = cache.addCompactCache<MyCCacheType>("ccache name", sizeInBytes);\n')),(0,r.kt)("h2",{id:"caching-using-compact-cache"},"Caching using Compact Cache"),(0,r.kt)("p",null,"Once you have the cache setup, you can store your keys and values in the compact cache using the following API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// get/set/del/exist interface defined in cachelib/compact_cache/CCache.h\nKey k{10};\nValue v{"foobar"};\n\n// Set the key and value.\nauto res = ccache->set(k, &v);\n\n// Look up by key.\nValue v2;\nauto res = ccache->get(k, &v2 /* copy the value if cache hit */);\n\n// Delete the key. Returns a copy of the deleted value.\nValue v3;\nauto res = ccache->del(k, &v3 /* copy of the deleted value if present */);\n')),(0,r.kt)("p",null,"The APIs return an enum of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CCacheReturn")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class CCacheReturn : int {\n  TIMEOUT = -2,\n  ERROR = -1,\n  NOTFOUND = 0,\n  FOUND = 1\n};\n")),(0,r.kt)("h2",{id:"restoring-an-instance-of-compact-cache"},"Restoring an instance of Compact Cache"),(0,r.kt)("p",null,"This is only relevant if your cache is persistent and you want to access the cache that you have previously created in another process. After the compact cache was attached, you should be able to use the instance the same way as you did when you first created it, with all the previous content intact:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// For details, see cachelib/allocator/CacheAllocator.hpp.\nauto* ccache = cache.attachCompactCache<CCacheType>("ccache name");\n')))}u.isMDXComponent=!0}}]);