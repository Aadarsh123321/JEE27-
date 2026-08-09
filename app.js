// --- 1. DYNAMIC CSS & UI INJECTION ---
const style=document.createElement('style');
style.textContent=`:root{--bg-color:#080808;--surface-color:#161616;--text-primary:#ffffff;--text-secondary:#a3a3a3;--accent-color:#ffffff;--highlight:#2563eb;--glow-highlight:rgba(37,99,235,0.6);--border-color:#333333;--leaderboard-bg:#0d0e15;--diamond-color:#bc6bf0;--gift-color:#ef8716;--text-shadow-color:#ffffff;--dropdown-bg:#1e1f22;--ring-gradient:conic-gradient(#ea4335,#4285f4,#34a853,#fbbc05,#ea4335)}body.light-mode{--bg-color:#f3f4f6;--surface-color:#ffffff;--text-primary:#111827;--text-secondary:#4b5563;--accent-color:#000000;--highlight:#3b82f6;--glow-highlight:rgba(59,130,246,0.4);--border-color:#d1d5db;--leaderboard-bg:#e5e7eb;--dropdown-bg:#ffffff;--text-shadow-color:rgba(0,0,0,0.2)}*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',-apple-system,sans-serif}body{background-color:var(--bg-color);color:var(--text-primary);overflow-x:hidden;display:flex;flex-direction:column;height:100vh;transition:background-color 0.3s,color 0.3s}header{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;border-bottom:1px solid var(--border-color);background-color:rgba(var(--bg-color),0.9);backdrop-filter:blur(10px);position:sticky;top:0;z-index:100;transition:all 0.3s}.brand{display:flex;align-items:center;justify-content:center;cursor:pointer}.brand h1{font-size:28px;font-weight:600;text-shadow:0px 0px 12px var(--text-shadow-color);letter-spacing:1px;display:flex;align-items:center;white-space:nowrap;color:var(--text-primary)}.cursor{font-weight:300;margin-left:2px;color:var(--text-primary);animation:blink 0.8s infinite alternate;position:relative;top:-2px}@keyframes blink{0%{opacity:0}100%{opacity:1}}.custom-badges{display:flex;gap:8px;margin-left:10px;align-items:center}.custom-badges svg{width:22px;height:22px;overflow:visible}.diamond{filter:drop-shadow(0 0 3px rgba(188,107,240,0.5)) drop-shadow(0 0 6px rgba(188,107,240,0.3));animation:flow-glow-diamond 2.5s ease-in-out infinite alternate}.gift{filter:drop-shadow(0 0 3px rgba(239,135,22,0.5)) drop-shadow(0 0 6px rgba(239,135,22,0.3));animation:flow-glow-gift 2.5s ease-in-out infinite alternate 1.25s}@keyframes flow-glow-diamond{0%{filter:drop-shadow(0 0 3px rgba(188,107,240,0.4));transform:translateY(1px)}100%{filter:drop-shadow(0 0 12px rgba(188,107,240,0.9));transform:translateY(-2px)}}@keyframes flow-glow-gift{0%{filter:drop-shadow(0 0 3px rgba(239,135,22,0.4));transform:translateY(1px)}100%{filter:drop-shadow(0 0 12px rgba(239,135,22,0.9));transform:translateY(-2px)}}nav{display:flex;gap:2.5rem;position:absolute;left:50%;transform:translateX(-50%)}nav button{background:none;border:none;color:var(--text-secondary);font-size:1.05rem;font-weight:500;cursor:pointer;transition:all 0.3s ease;position:relative}nav button::after{content:'';position:absolute;width:0;height:2px;bottom:-5px;left:50%;background-color:var(--highlight);transition:all 0.3s ease;transform:translateX(-50%);box-shadow:0 0 10px var(--glow-highlight)}nav button.active,nav button:hover{color:var(--text-primary);text-shadow:0 0 15px var(--glow-highlight)}nav button.active::after,nav button:hover::after{width:100%}.header-actions{display:flex;align-items:center;gap:1.2rem}.search-bar{background-color:var(--surface-color);border:1px solid var(--border-color);color:var(--text-primary);padding:0.6rem 1.2rem;border-radius:20px;outline:none;display:none;transition:all 0.3s}.search-bar:focus{border-color:var(--highlight);box-shadow:0 0 10px var(--glow-highlight)}.icon-btn{background:var(--surface-color);border:1px solid var(--border-color);color:var(--text-primary);width:40px;height:40px;border-radius:50%;font-size:1.2rem;cursor:pointer;transition:all 0.3s;display:flex;justify-content:center;align-items:center}.icon-btn:hover{box-shadow:0 0 10px var(--text-secondary)}.btn-google{background:var(--text-primary);color:var(--bg-color);border:none;padding:8px 18px;border-radius:8px;cursor:pointer;font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:8px;transition:all 0.2s;box-shadow:0 4px 12px rgba(0,0,0,0.1)}.btn-google:hover{transform:translateY(-1px);box-shadow:0 4px 15px var(--glow-highlight)}.profile-wrapper{position:relative;display:none}.nav-profile-pic{width:40px;height:40px;border-radius:50%;cursor:pointer;object-fit:cover;border:2px solid transparent;transition:border 0.2s}.nav-profile-pic:hover{border:2px solid var(--highlight);box-shadow:0 0 10px var(--glow-highlight)}.profile-dropdown{position:absolute;top:55px;right:0;background-color:var(--dropdown-bg);width:280px;border-radius:16px;padding:20px 15px;border:1px solid var(--border-color);box-shadow:0 10px 30px rgba(0,0,0,0.5);display:flex;flex-direction:column;align-items:center;z-index:200;opacity:0;visibility:hidden;transform:translateY(-10px);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}.profile-dropdown.show{opacity:1;visibility:visible;transform:translateY(0)}.dropdown-email{font-size:0.85rem;color:var(--text-secondary);margin-bottom:20px;text-align:center;width:100%}.profile-ring-container{position:relative;width:76px;height:76px;border-radius:50%;background:var(--ring-gradient);display:flex;align-items:center;justify-content:center;margin-bottom:15px}.dropdown-profile-pic{width:70px;height:70px;border-radius:50%;object-fit:cover;background-color:var(--dropdown-bg);border:3px solid var(--dropdown-bg)}.dropdown-greeting{font-size:1.2rem;font-weight:500;margin-bottom:20px;color:var(--text-primary)}.btn-logout{background-color:transparent;color:#ef4444;border:1px solid var(--border-color);padding:8px 24px;border-radius:20px;cursor:pointer;font-size:0.9rem;font-weight:500;transition:all 0.2s}.btn-logout:hover{background-color:rgba(239,68,68,0.1);border-color:#ef4444}main{flex:1;display:flex;flex-direction:column;overflow:hidden}.tab-content{display:none;flex:1;height:100%;overflow-y:auto}.tab-content.active{display:flex;animation:fadeIn 0.4s ease}@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}#home{flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;background:radial-gradient(circle at center,rgba(37,99,235,0.1) 0%,transparent 60%)}#home::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(var(--border-color) 1px,transparent 1px),linear-gradient(90deg,var(--border-color) 1px,transparent 1px);background-size:40px 40px;opacity:0.1;z-index:-1;pointer-events:none}#canvas-container{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-2;overflow:hidden;pointer-events:none}.hero{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.hero h1{font-size:4rem;margin-bottom:0.5rem;font-weight:700;background:linear-gradient(to right,var(--text-primary),#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hero p.tagline{color:var(--highlight);font-weight:500;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;text-align:center}.hero p.desc{color:var(--text-secondary);margin-bottom:2.5rem;font-size:1.1rem;max-width:500px;line-height:1.6;text-align:center}.hero-buttons{display:flex;gap:1.5rem;justify-content:center}.btn-primary{background:var(--highlight);color:#fff;border:none;padding:0.8rem 2rem;border-radius:30px;font-size:1rem;font-weight:600;cursor:pointer;box-shadow:0 4px 15px var(--glow-highlight);transition:all 0.3s}.btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px var(--glow-highlight)}.btn-outline{background:rgba(255,255,255,0.05);border:1px solid var(--border-color);color:var(--text-primary);padding:0.8rem 2rem;border-radius:30px;font-weight:500;cursor:pointer;transition:all 0.3s;backdrop-filter:blur(5px)}.btn-outline:hover{background:var(--surface-color);border-color:var(--text-secondary)}.sliding-panel{position:fixed;bottom:-100%;left:0;width:100%;height:60vh;background-color:var(--surface-color);border-top:1px solid var(--border-color);transition:bottom 0.5s cubic-bezier(0.4,0,0.2,1);z-index:200;padding:3rem;box-shadow:0 -10px 40px rgba(0,0,0,0.5);overflow-y:auto}.sliding-panel.open{bottom:0}.close-panel{position:absolute;top:1rem;right:2rem;background:var(--border-color);border:none;color:var(--text-primary);width:35px;height:35px;border-radius:50%;font-size:1.2rem;cursor:pointer}#practice{flex-direction:row}.sidebar{width:300px;border-right:1px solid var(--border-color);padding:1.5rem;overflow-y:auto;background-color:var(--bg-color)}.sidebar h3{font-size:0.9rem;color:var(--text-secondary);text-transform:uppercase;margin-bottom:1rem;letter-spacing:1px}.category{margin-bottom:1.5rem}.category-title{color:var(--text-primary);font-weight:bold;margin-bottom:0.5rem;padding-bottom:0.5rem;border-bottom:1px solid var(--border-color)}.chapter-list{list-style:none}.chapter-list li{padding:0.6rem 1rem;color:var(--text-secondary);cursor:pointer;transition:all 0.2s;border-radius:8px;margin-bottom:2px}.chapter-list li:hover{color:var(--text-primary);background:var(--surface-color)}.chapter-list li.selected{color:var(--highlight);font-weight:bold;background:rgba(37,99,235,0.1);border-left:3px solid var(--highlight)}.exercises-container{flex:1;padding:2.5rem;overflow-y:auto;background-color:var(--bg-color)}.exercise-card{background-color:var(--surface-color);border:1px solid var(--border-color);border-radius:12px;padding:1.5rem;margin-bottom:1rem;cursor:pointer;transition:all 0.3s;display:flex;justify-content:space-between;align-items:center}.exercise-card:hover{transform:translateY(-3px);border-color:var(--highlight);box-shadow:0 5px 15px rgba(0,0,0,0.2)}.exercise-card h3{color:var(--text-primary)}#leaderboard{background-color:var(--leaderboard-bg);flex-direction:column;align-items:center;padding:3rem 2rem}.rankings-header{font-size:2rem;font-weight:700;color:var(--text-primary);letter-spacing:3px;margin-bottom:2rem;text-transform:uppercase;display:flex;align-items:center;gap:15px}.rankings-header::before,.rankings-header::after{content:'';height:2px;width:50px;background:var(--highlight);box-shadow:0 0 10px var(--glow-highlight)}.lb-list{width:100%;max-width:650px;background:var(--surface-color);border:1px solid var(--border-color);border-radius:16px;padding:1rem;box-shadow:0 10px 30px rgba(0,0,0,0.1)}.lb-empty-state{text-align:center;padding:3rem 1rem;color:var(--text-secondary);font-size:1.1rem}.lb-row{display:flex;align-items:center;justify-content:space-between;padding:1.2rem;border-bottom:1px solid var(--border-color);transition:background 0.3s;border-radius:8px}.lb-row:last-child{border:none}.lb-row:hover{background:rgba(128,128,128,0.05)}.lb-user{display:flex;align-items:center;gap:1.2rem}.rank-badge{font-weight:bold;font-size:1.2rem;color:var(--highlight);width:30px;text-align:center}.small-avatar{width:45px;height:45px;border-radius:50%;object-fit:cover;border:2px solid var(--border-color)}.lb-name{font-weight:600;color:var(--text-primary);font-size:1.05rem}.lb-stats{font-size:0.9rem;color:var(--text-secondary)}.lb-score{font-weight:bold;font-size:1.1rem;color:var(--text-primary);background:rgba(37,99,235,0.1);padding:5px 12px;border-radius:20px;border:1px solid rgba(37,99,235,0.3)}.mock-test-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0b0f19;z-index:999;flex-direction:column;overflow:hidden}.practice-header,.question-header,.action-bar{padding:16px 24px;background:#1f2937;display:flex;justify-content:space-between;align-items:center}.btn-end{background:#ef4444;color:#fff;padding:8px 20px;border:none;border-radius:6px;cursor:pointer;font-weight:bold}.practice-container{display:flex;flex:1;padding:16px;gap:16px;overflow:hidden;background:#0b0f19}.left-panel,.right-panel{background:#111827;border:1px solid #1f2937;display:flex;flex-direction:column;border-radius:12px;overflow:hidden}.left-panel{flex:3}.right-panel{flex:1;min-width:320px}.stopwatch{display:flex;gap:8px;background:#111827;padding:6px 14px;border-radius:20px;color:#60a5fa;font-family:monospace}.question-area{padding:30px;flex:1;overflow-y:auto;color:#e2e8f0}.option-label{display:flex;align-items:center;gap:15px;cursor:pointer;padding:16px;border:2px solid #374151;border-radius:8px;margin-top:12px;background:#1f2937;font-weight:500;color:#e2e8f0}.option-label.selected:not(.locked){border-color:#60a5fa;background:rgba(96,165,250,.1)}.option-label.correct{border-color:#10b981 !important;background:rgba(16,185,129,.1) !important}.option-label.incorrect{border-color:#ef4444 !important;background:rgba(239,68,68,.1) !important}.solution-container{display:none;margin-top:30px;padding:20px;background:#0f172a;border-left:4px solid #10b981;border-radius:8px}.btn{padding:10px 24px;border:none;border-radius:6px;color:#fff;cursor:pointer;font-weight:600}.btn-check{background:#2563eb}.btn-nav{background:#374151}.candidate-info,.legend-grid{padding:20px;border-bottom:1px solid #1f2937;display:flex;gap:15px}.legend-grid{flex-wrap:wrap}.palette-container{padding:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(45px,1fr));gap:12px;overflow-y:auto;align-content:start}.status-bubble{width:32px;height:32px;display:flex;justify-content:center;align-items:center;color:#fff;border-radius:8px;cursor:pointer;font-weight:bold}.not-visited{background:#1f2937;color:#9ca3af}.not-answered{background:#374151}.correct{background:#10b981}.incorrect{background:#ef4444}.review{background:#eab308 !important;color:#000 !important;border:none;}.current-q{border:2px solid #fff !important;transform:scale(1.1);box-shadow:0 0 8px rgba(255,255,255,0.5);}
@media (max-width: 768px) { header { flex-wrap: wrap; padding: 1rem; gap: 10px; justify-content: space-between; } .brand h1 { font-size: 20px; } nav { position: static; transform: none; width: 100%; justify-content: space-around; order: 3; margin-top: 10px; } .hero h1 { font-size: 2.2rem; text-align: center; line-height: 1.2; padding: 0 10px; } .hero p.desc { font-size: 0.95rem; padding: 0 1.5rem; } .hero-buttons { flex-direction: column; width: 100%; padding: 0 2rem; gap: 1rem; align-items: center; } .btn-primary, .btn-outline { width: 100%; max-width: 300px; text-align: center; } #practice { flex-direction: column; } .sidebar { width: 100%; max-height: 250px; border-right: none; border-bottom: 1px solid var(--border-color); } .exercises-container { padding: 1rem; } .exercise-card { flex-direction: column; align-items: flex-start; gap: 10px; padding: 1rem; } .practice-container { flex-direction: column; overflow-y: auto; padding: 10px; gap: 10px; } .left-panel, .right-panel { flex: none; width: 100%; min-width: 100%; } .question-header { flex-wrap: wrap; gap: 10px; } .action-bar { flex-wrap: wrap; gap: 10px; justify-content: center; } .rankings-header { font-size: 1.5rem; text-align: center; } .lb-row { flex-direction: column; gap: 10px; align-items: flex-start; text-align: left; } .lb-score { align-self: flex-start; margin-left: 55px; } h2 { display: flex; flex-direction: column; align-items: flex-start; } }
#flipbook-modal{display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#1a1a1a;background-image:url('https://res.cloudinary.com/yhelbo6v/image/upload/v1786308271/diwali-festival-patterned-background_53876-118874_sohuhy.jpg');background-size:cover;background-position:center;background-repeat:no-repeat;z-index:1000}.nav-arrow{position:absolute;top:50%;transform:translateY(-50%);font-size:40px;color:rgba(255,255,255,0.6);cursor:pointer;z-index:1020;user-select:none;display:none;background:rgba(0,0,0,0.4);padding:15px 10px;border-radius:8px;transition:background 0.3s,color 0.3s}.nav-arrow:hover{color:#fff;background:rgba(0,0,0,0.8)}#nav-prev{left:15px}#nav-next{right:15px}#loader-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;background:#1a1a1a;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1001}.book-loader{--color:#fff;--duration:6.8s;width:32px;height:12px;position:relative;margin:32px 0 0 0;zoom:1.5}.book-loader .inner{width:32px;height:12px;position:relative;transform-origin:2px 2px;transform:rotateZ(-90deg);animation:book var(--duration) ease infinite}.book-loader .inner .left,.book-loader .inner .right{width:60px;height:4px;top:0;border-radius:2px;background:var(--color);position:absolute}.book-loader .inner .left:before,.book-loader .inner .right:before{content:'';width:48px;height:4px;border-radius:2px;background:inherit;position:absolute;top:-10px;left:6px}.book-loader .inner .left{right:28px;transform-origin:58px 2px;transform:rotateZ(90deg);animation:left var(--duration) ease infinite}.book-loader .inner .right{left:28px;transform-origin:2px 2px;transform:rotateZ(-90deg);animation:right var(--duration) ease infinite}.book-loader .inner .middle{width:32px;height:12px;border:4px solid var(--color);border-top:0;border-radius:0 0 9px 9px;transform:translateY(2px)}.book-loader ul{margin:0;padding:0;list-style:none;position:absolute;left:50%;top:0}.book-loader ul li{height:4px;border-radius:2px;transform-origin:100% 2px;width:48px;right:0;top:-10px;position:absolute;background:var(--color);transform:rotateZ(0deg) translateX(-18px);animation-duration:var(--duration);animation-timing-function:ease;animation-iteration-count:infinite}@keyframes left{4%{transform:rotateZ(90deg)}10%,40%{transform:rotateZ(0deg)}46%,54%{transform:rotateZ(90deg)}60%,90%{transform:rotateZ(0deg)}96%{transform:rotateZ(90deg)}}@keyframes right{4%{transform:rotateZ(-90deg)}10%,40%{transform:rotateZ(0deg)}46%,54%{transform:rotateZ(-90deg)}60%,90%{transform:rotateZ(0deg)}96%{transform:rotateZ(-90deg)}}@keyframes book{4%{transform:rotateZ(-90deg)}10%,40%{transform:rotateZ(0deg);transform-origin:2px 2px}40.01%,59.99%{transform-origin:30px 2px}46%,54%{transform:rotateZ(90deg)}60%,90%{transform:rotateZ(0deg);transform-origin:2px 2px}96%{transform:rotateZ(-90deg)}}#zoom-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none}#book-wrapper{display:none;box-shadow:0 10px 40px rgba(0,0,0,0.3);transform-origin:center center}.page{background-color:#fff;overflow:hidden;display:flex;justify-content:center;align-items:center;border:1px solid #ddd}.page canvas{width:100%;height:100%;object-fit:contain}#close-btn{position:absolute;top:20px;right:20px;background:rgba(0,0,0,0.6);border:none;color:#fff;font-size:22px;cursor:pointer;width:40px;height:40px;border-radius:50%;z-index:1030;display:flex;align-items:center;justify-content:center}#zoom-controls{display:none;position:absolute;bottom:30px;left:50%;transform:translateX(-50%);background:#4a4a4a;padding:6px 16px;border-radius:30px;z-index:1020;gap:15px;align-items:center;color:#fff}#zoom-controls button{background:#fff;color:#333;border:none;width:30px;height:30px;border-radius:50%;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding-bottom:2px}`;
for(let i=0;i<18;i++){let d1=i*1.86,d2=i*1.74;style.textContent+=`.book-loader ul li:nth-child(${i+1}){animation-name:page-${i};}@keyframes page-${i}{${4+d1}%{transform:rotateZ(0deg) translateX(-18px);}${13+d2}%,${54+d1}%{transform:rotateZ(180deg) translateX(-18px);}${63+d2}%{transform:rotateZ(0deg) translateX(-18px);}} `;}
document.head.appendChild(style);

document.getElementById('inject-header').outerHTML=`<header><div class="brand" onclick="switchTab('home')"><h1><span id="typed-text"></span><span class="cursor">|</span><span class="custom-badges"><svg class="diamond" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><mask id="diamondMask"><rect width="100" height="100" fill="white" /><g stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="48" x2="95" y2="48" /><line x1="22" y1="20" x2="50" y2="48" /><line x1="78" y1="20" x2="50" y2="48" /><line x1="28" y1="48" x2="50" y2="92" /><line x1="72" y1="48" x2="50" y2="92" /></g></mask></defs><polygon points="50,92 5,48 22,20 78,20 95,48" fill="var(--diamond-color)" mask="url(#diamondMask)" /></svg><svg class="gift" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><mask id="giftMask"><rect width="100" height="100" fill="white" /><rect x="46" y="40" width="8" height="55" fill="black" /><rect x="15" y="66" width="70" height="7" fill="black" /></mask></defs><path d="M 45 43 C 25 12, 10 38, 43 43" stroke="var(--gift-color)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M 55 43 C 75 12, 90 38, 57 43" stroke="var(--gift-color)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g mask="url(#giftMask)"><rect x="22" y="54" width="56" height="38" rx="6" fill="var(--gift-color)" /><rect x="16" y="42" width="68" height="12" rx="4" fill="var(--gift-color)" /></g></svg></span></h1></div><nav><button class="active" onclick="switchTab('home')">Home</button><button onclick="switchTab('practice')">Practice</button><button onclick="switchTab('leaderboard')">Leaderboard</button></nav><div class="header-actions"><input type="text" class="search-bar" id="search-input" placeholder="Search Chapters..." onkeyup="filterChapters()"><button id="btn-login" class="btn-google" onclick="signInWithGoogle()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>Sign In</button><div id="profile-wrapper" class="profile-wrapper"><img id="nav-profile-pic" class="nav-profile-pic" src="" alt="Profile" onclick="toggleDropdown()" referrerpolicy="no-referrer"><div id="profile-dropdown" class="profile-dropdown"><div class="dropdown-email" id="user-email">email@example.com</div><div class="profile-ring-container"><img id="dropdown-profile-pic" class="dropdown-profile-pic" src="" alt="Profile Large" referrerpolicy="no-referrer"></div><div class="dropdown-greeting" id="user-greeting">Hi, USER!</div><button class="btn-logout" onclick="signOutUser()">Sign out</button></div></div><button class="icon-btn" id="theme-toggle" onclick="toggleTheme()">☾</button></div></header>`;
document.getElementById('inject-home').outerHTML=`<div id="home" class="tab-content active"><div id="canvas-container"></div><div class="hero"><p class="tagline">Welcome to the Matrix</p><h1>Elevate Your JEE Prep</h1><p class="desc">Experience a seamless, user-centric practice environment meticulously crafted for JEE Advanced aspirants. Sync your progress and conquer standard references.</p><div class="hero-buttons"><button class="btn-primary" onclick="switchTab('practice')">Start Practicing</button><button class="btn-outline" onclick="togglePanel()">Platform Info</button></div></div><div class="sliding-panel" id="info-panel"><button class="close-panel" onclick="togglePanel()">×</button><h2 style="color:var(--text-primary);margin-bottom:1rem;">About The Platform</h2><p style="color:var(--text-secondary);line-height:1.6;margin-bottom:1rem;">Hello, I am AADARSH currently I'm building this site , Creating user-centric solutions for a better tomorrow.</p><p style="color:var(--text-secondary);line-height:1.6;">This section is dedicated to rigorous JEE Advanced preparation. Here, you will find meticulously digitized chapters from standard references like the complete Black Book. Click on 'Start Practicing' to resume exactly where you left off in your mock tests.</p></div></div>`;
document.getElementById('inject-leaderboard').outerHTML=`<div id="leaderboard" class="tab-content"><div class="rankings-header">GLOBAL RANKINGS</div><div class="lb-list" id="leaderboard-container"><div class="lb-empty-state" id="lb-empty-state">No members currently or loading data... Sign in and start practicing to get ranked!</div><div id="lb-dynamic-content" style="display:none; width: 100%;"></div></div></div>`;

// INJECT FLIPBOOK MODAL HTML
document.body.insertAdjacentHTML('beforeend', `<div id="flipbook-modal"><button id="close-btn">&times;</button><div id="nav-prev" class="nav-arrow">&#10094;</div><div id="nav-next" class="nav-arrow">&#10095;</div><div id="loader-wrapper"><div class="book-loader"><div class="inner"><div class="left"></div><div class="middle"></div><div class="right"></div></div><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div><div style="margin-top: 30px; color: white; font-weight: bold; letter-spacing: 1px;">Loading Solution...</div></div><div id="zoom-container"><div id="book-wrapper"></div></div><div id="zoom-controls"><button id="zoom-out-btn">-</button><span id="zoom-level-text">100%</span><button id="zoom-in-btn">+</button></div></div>`);

// --- 2. TYPEWRITER EFFECT LOGIC ---
let textToType="U2",charIndex=0,isDeleting=false,typingTimeout;
const typeDelayMs=90,deleteDelayMs=80,holdDelayMs=2500,pauseDelayMs=500,typedTextSpan=document.getElementById('typed-text');
function loopTypewriter(){const characters=Array.from(textToType);if(isDeleting){if(charIndex>0){charIndex--;typedTextSpan.textContent=characters.slice(0,charIndex).join('');typingTimeout=setTimeout(loopTypewriter,deleteDelayMs);}else{isDeleting=false;typingTimeout=setTimeout(loopTypewriter,pauseDelayMs);}}else{if(charIndex<characters.length){charIndex++;typedTextSpan.textContent=characters.slice(0,charIndex).join('');typingTimeout=setTimeout(loopTypewriter,typeDelayMs);}else{isDeleting=true;typingTimeout=setTimeout(loopTypewriter,holdDelayMs);}}}
function updateBrandText(newText){clearTimeout(typingTimeout);textToType=newText.toUpperCase();charIndex=0;isDeleting=false;typedTextSpan.textContent="";loopTypewriter();}

// --- 3. GITHUB FLIPBOOK PDF DIRECTORY ---
const GH_BASE = "https://raw.githubusercontent.com/Aadarsh123321/JEE27-./main/";
const chapterPdfLinks = {
    "Function": GH_BASE + "Function%20sol.pdf",
    "Limit": GH_BASE + "Limits%20sol.pdf",
    "Continuity & Differentiability": GH_BASE + "CDD%20Solution%20.pdf",
    "Application of Derivatives": GH_BASE + "AOD%20sol.pdf",
    "Integration": GH_BASE + "Indefinite%20sol.pdf", 
    "Area Under Curves": GH_BASE + "AUC%20sol.pdf",
    "Differential Equations": GH_BASE + "DE%20sol.pdf",
    "Quadratic Equations": GH_BASE + "Quadratic%20sol.pdf",
    "Sequence and Series": GH_BASE + "Sequence%20sol.pdf",
    "Determinants": GH_BASE + "Determinants%20sol.pdf",
    "Complex Numbers": GH_BASE + "Complex%20sol.pdf",
    "Matrices": GH_BASE + "Matrices%20sol.pdf",
    "Permutation & Combinations": GH_BASE + "Pnc%20sol.pdf",
    "Binomial Theorem": GH_BASE + "BINOMIAL%20sol.pdf",
    "Probability": GH_BASE + "Probability%20sol.pdf",
    "Logarithms": GH_BASE + "Logarithm%20sol.pdf",
    "Straight Lines": GH_BASE + "Straight%20line%20sol.pdf",
    "Circle": GH_BASE + "Circle%20sol.pdf",
    "Parabola": GH_BASE + "Parabola%20sol.pdf",
    "Ellipse": GH_BASE + "Ellipse%20sol.pdf",
    "Hyperbola": GH_BASE + "Hyperbola%20sol.pdf",
    "Compound Angles": GH_BASE + "Compound%20Angles%20sol.pdf",
    "Trigonometric Equations": GH_BASE + "Trigo%20slo.pdf",
    "Solution of Triangles": GH_BASE + "Sot%20sol.pdf",
    "Inverse Trigonometric Functions": GH_BASE + "ITF%20sol.pdf",
    "Vector & 3Dimensional Geometry": GH_BASE + "Vectro%203d%20sol.pdf"
};

// --- 4. FIREBASE CONFIG & LIVE LEADERBOARD LOGIC ---
const firebaseConfig = { apiKey: "AIzaSyAH22AT6fP9cuDAFq8sXBLi9GFu9cvWgE4", authDomain: "jee-bb.firebaseapp.com", projectId: "jee-bb", storageBucket: "jee-bb.firebasestorage.app", messagingSenderId: "341400606572", appId: "1:341400606572:web:6b992fd542d29e9da68549", measurementId: "G-3CMSTEF4CR" };
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}
const auth=firebase.auth(); const db=firebase.firestore(); 
const loginBtn=document.getElementById('btn-login'),profileWrapper=document.getElementById('profile-wrapper'),dropdown=document.getElementById('profile-dropdown');

function initLiveLeaderboard() {
    const lbContainer = document.getElementById('lb-dynamic-content'), lbEmpty = document.getElementById('lb-empty-state');
    db.collection("users").orderBy("questionsSolved", "desc").limit(50).onSnapshot((querySnapshot) => {
        if (querySnapshot.empty) { lbEmpty.style.display = 'block'; lbContainer.style.display = 'none'; return; }
        lbEmpty.style.display = 'none'; lbContainer.style.display = 'block'; lbContainer.innerHTML = ''; 
        let rank = 1;
        querySnapshot.forEach((doc) => {
            const data = doc.data(), score = data.questionsSolved || 0;
            lbContainer.insertAdjacentHTML('beforeend', `<div class="lb-row"><div class="lb-user"><div class="rank-badge">#${rank}</div><img class="small-avatar" src="${data.photoURL}" alt="Avatar" referrerpolicy="no-referrer"><div><div class="lb-name">${data.name}</div><div class="lb-stats">JEE Advanced Aspirant</div></div></div><div class="lb-score">${score} Qns Solved</div></div>`);
            rank++;
        });
    }, (error) => console.error("Live Leaderboard Error: ", error));
}

auth.onAuthStateChanged(user=>{
    if(user){
        loginBtn.style.display='none'; profileWrapper.style.display='block';
        const photoURL=user.photoURL||'https://ui-avatars.com/api/?name='+(user.displayName||'U')+'&background=random';
        document.getElementById('nav-profile-pic').src=photoURL; document.getElementById('dropdown-profile-pic').src=photoURL; document.getElementById('user-email').textContent=user.email;
        const firstName=user.displayName?user.displayName.split(' ')[0]:'USER'; document.getElementById('user-greeting').textContent=`Hi, ${firstName}!`; updateBrandText(firstName);
        const userDocRef = db.collection("users").doc(user.uid);
        userDocRef.get().then(docSnap => { let data = { name: user.displayName || 'Anonymous Aspirant', photoURL: photoURL, email: user.email }; if (!docSnap.exists) { data.questionsSolved = 0; } userDocRef.set(data, { merge: true }); });
    }else{ loginBtn.style.display='flex'; profileWrapper.style.display='none'; dropdown.classList.remove('show'); updateBrandText("U2"); }
});

function signInWithGoogle(){const provider=new firebase.auth.GoogleAuthProvider();auth.signInWithPopup(provider).catch(err=>{console.error("Auth Error:",err);alert("Login Failed: "+err.message);});}
function signOutUser(){auth.signOut().then(()=>{dropdown.classList.remove('show');}).catch(err=>console.error("Sign Out Error:",err));}
function toggleDropdown(){dropdown.classList.toggle('show');}
document.addEventListener('click',function(event){if(profileWrapper.style.display==='block'){const isClickInside=profileWrapper.contains(event.target);if(!isClickInside&&dropdown.classList.contains('show')){dropdown.classList.remove('show');}}});

// --- 5. UI LOGIC (Tabs, Themes, Sidebar Navigation, LocalStorage Persistence) ---
function switchTab(tabId){
    localStorage.setItem('activeJEEastraTab', tabId); // FIX 1: Save state for page refreshes
    document.querySelectorAll('.tab-content').forEach(tab=>tab.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(btn=>btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('nav button').forEach(btn=>{if(btn.innerText.toLowerCase()===tabId)btn.classList.add('active');});
    document.getElementById('search-input').style.display = (tabId==='practice') ? 'block' : 'none';
}
function toggleTheme(){const body=document.body,themeBtn=document.getElementById('theme-toggle');body.classList.toggle('light-mode');if(body.classList.contains('light-mode')){themeBtn.textContent='☼';}else{themeBtn.textContent='☾';}}
function togglePanel(){document.getElementById('info-panel').classList.toggle('open');}
function filterChapters(){let input=document.getElementById('search-input').value.toLowerCase(),listItems=document.querySelectorAll('.chapter-list li');listItems.forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(input)?"":"none";});}
function loadExercises(chapterName,element){
    document.querySelectorAll('.chapter-list li').forEach(el=>el.classList.remove('selected'));
    element.classList.add('selected');
    const defaultMsg = document.getElementById('default-msg'); if(defaultMsg) defaultMsg.style.display='none';
    document.querySelectorAll('.chapter-content').forEach(el=>el.style.display='none');
    let activeCh=document.getElementById('ch-'+chapterName.replace(/\s+/g,'').replace(/&/g,'and'));
    if(activeCh) activeCh.style.display='block';
}

// --- 6. PRACTICE MODE DYNAMIC SCRIPT INTEGRATION & CLOUD SYNC LOGIC ---
let exData={ex:"",ch:"",id:""},cIdx=0,tmr=null, qData=[];
const sampleQuestions=[{id:1,t:'Fallback Question: Test loaded without external script.',o:["A","B","C","D"],c:0,s:"This is a sample because the specific JS file was not linked yet.", type:"single"}];

function loadTestScript(chapter, exName, scriptSrc) {
    const user = firebase.auth().currentUser;
    if (!user) { alert("You must Sign In with Google before starting a practice test! This ensures your marks and global leaderboard rank are saved permanently."); signInWithGoogle(); return; }
    window.customQData = null; 
    let script = document.createElement('script'); script.src = scriptSrc + '?t=' + new Date().getTime(); 
    script.onload = () => { openTestEnvironment(chapter, exName); };
    script.onerror = () => { openTestEnvironment(chapter, exName); };
    document.body.appendChild(script);
}

async function openTestEnvironment(chapter,exercise){
    document.getElementById('mock-test-environment').style.display='flex';
    exData={ex:exercise,ch:chapter,id:(chapter.replace(/\s+/g,'_')+'_'+exercise.replace(/[:\s]+/g,'_'))};
    document.getElementById("d-ex").innerText=exData.ex; document.getElementById("d-ch").innerText=exData.ch;
    const user=firebase.auth().currentUser;
    document.getElementById("u-name").innerText=(user&&user.displayName)?user.displayName:"Guest";
    document.getElementById("u-ini").innerText=(user&&user.displayName)?user.displayName.charAt(0).toUpperCase():"G";
    qData = (window.customQData && window.customQData.length > 0) ? JSON.parse(JSON.stringify(window.customQData)) : JSON.parse(JSON.stringify(sampleQuestions));
    await loadP(); renPal(); loadQ(0); updateMarksDisplay();
}

function saveP(){
    const dataStr = JSON.stringify(qData.map(q=>({st:q.st||"not-visited",so:q.so??null,l:q.l||0,ts:q.ts||0,r:q.r||0})));
    localStorage.setItem(exData.id, dataStr);
    const user = firebase.auth().currentUser; if(user) { db.collection("users").doc(user.uid).collection("progress").doc(exData.id).set({ data: dataStr }); }
}

async function loadP(){
    const user = firebase.auth().currentUser; let d = localStorage.getItem(exData.id);
    if(user) { try { const docSnap = await db.collection("users").doc(user.uid).collection("progress").doc(exData.id).get(); if(docSnap.exists) { d = docSnap.data().data; localStorage.setItem(exData.id, d); } } catch(e) { console.error(e); } }
    qData=d?qData.map((q,i)=>{let p=JSON.parse(d)[i];return{...q,st:p?.st||"not-visited",so:p?.so??null,l:p?.l||0,ts:p?.ts||0,r:p?.r||0}}):qData.map(q=>({...q,st:"not-visited",so:null,l:0,ts:0,r:0}));
}

function startT(){clearInterval(tmr);let s=qData[cIdx].ts||0;updT(s);if(!qData[cIdx].l){tmr=setInterval(()=>{qData[cIdx].ts=++s;updT(s);if(s%5==0)saveP();},1000);}}
function updT(s){document.getElementById("q-time").innerText=String(Math.floor(s/60)).padStart(2,'0')+":"+String(s%60).padStart(2,'0');}
function toggleReview() { if(cIdx < 0 || cIdx >= qData.length) return; qData[cIdx].r = document.getElementById("chk-review").checked ? 1 : 0; saveP(); updPal(); }
function loadQ(i){ cIdx=i;let q=qData[i]; if(q.st==="not-visited"){q.st="not-answered";saveP();} document.getElementById("q-num").innerText=`Q ${i+1} / ${qData.length}`; document.getElementById("chk-review").checked = !!qData[cIdx].r; startT();renQ();updPal(); }

function renQ(){
    let q=qData[cIdx], l=q.l?"locked":""; let type = q.type || 'single'; 
    document.getElementById("btn-chk").disabled=q.l; document.getElementById("btn-chk").innerText=q.l?"Checked":"Check Answer";
    let h=`<div><h3 style="margin-bottom:15px;line-height:1.5">${q.t}</h3></div><div style="margin-top:25px;display:flex;flex-direction:column;gap:12px">`;
    
    // FIX 2: Added event.preventDefault() to onclick bindings to stop checkbox <label> double-triggering which caused Ex2 lag & the un-check bug!
    if (type === 'single') {
        q.o.forEach((o,i)=>{
            let c=""; if(q.so===i&&!q.l)c="selected"; if(q.l&&q.so===i){if(i===q.c)c="correct";else c="incorrect";}
            h+=`<label class="option-label ${c} ${l}" onclick="event.preventDefault();!${q.l}&&selO(${i})"><input type="radio" name="o" ${q.so===i?"checked":""} ${q.l?"disabled":""}><span style="color:#60a5fa;font-weight:bold;flex-shrink:0">${String.fromCharCode(65+i)}</span><span>${o}</span></label>`;
        });
    } else if (type === 'multi') {
        let soArr = Array.isArray(q.so) ? q.so : [];
        q.o.forEach((o,i)=>{
            let c="", isSel = soArr.includes(i), isCor = Array.isArray(q.c) && q.c.includes(i);
            if(isSel&&!q.l)c="selected"; if(q.l&&isSel){if(isCor)c="correct";else c="incorrect";}
            h+=`<label class="option-label ${c} ${l}" onclick="event.preventDefault();!${q.l}&&selMulti(${i})"><input type="checkbox" ${isSel?"checked":""} ${q.l?"disabled":""}><span style="color:#60a5fa;font-weight:bold;flex-shrink:0">${String.fromCharCode(65+i)}</span><span>${o}</span></label>`;
        });
    } else if (type === 'match' || type === 'numeric') {
        let val = q.so || "", imode = type === 'numeric' ? 'inputmode="numeric"' : '', placeholder = type === 'match' ? 'Type answer in sequence (e.g., PQRS)' : 'Enter numerical answer', bc = "#374151", bg = "#1f2937";
        if (q.l) { let isCor = type === 'match' ? String(q.so||"").trim().toUpperCase() === String(q.c||"").trim().toUpperCase() : String(q.so||"").trim() === String(q.c||"").trim(); bc = isCor ? "#10b981" : "#ef4444"; bg = isCor ? "rgba(16,185,129,.1)" : "rgba(239,68,68,.1)"; } else if (val) { bc = "#60a5fa"; bg = "rgba(96,165,250,.1)"; }
        let inst = type === 'match' ? '<div style="font-size:13px; color:#eab308; margin-bottom:8px; font-weight:600;">Instruction: Type answer in sequence (e.g., PQRS)</div>' : '';
        h += `${inst}<input type="text" ${imode} value="${String(val).replace(/"/g, '&quot;')}" oninput="selTxt(this.value)" ${q.l ? "disabled" : ""} style="width:100%; padding:16px; border:2px solid ${bc}; border-radius:8px; background:${bg}; color:#fff; font-size:16px; outline:none; font-weight:bold;" placeholder="${placeholder}">`;
    }
    
    let correctDisplay = (type === 'single') ? `Option ${String.fromCharCode(65+q.c)}` : (type === 'multi') ? `Options ${q.c.map(x=>String.fromCharCode(65+x)).join(', ')}` : `${q.c}`;
    h+=`</div><div class="solution-container" style="display:${q.l?"block":"none"}"><div style="font-weight:700;color:#10b981;margin-bottom:10px;font-size:16px;">Correct Answer: ${correctDisplay}</div><button class="btn btn-outline" style="margin-top: 10px; padding: 8px 20px; font-weight: 600; border: 1px solid #60a5fa; color: #60a5fa; background: transparent; cursor: pointer; border-radius: 6px; transition: 0.3s;" onmouseover="this.style.background='rgba(96, 165, 250, 0.1)'" onmouseout="this.style.background='transparent'" onclick="openSolutionPanel()">See Solution</button></div>`;
    document.getElementById("q-area").innerHTML=h;
}

function selO(i){ if(qData[cIdx].l)return; qData[cIdx].so=i; qData[cIdx].st="not-answered"; saveP();renQ(); }
function selMulti(i){ if(qData[cIdx].l)return; let arr = Array.isArray(qData[cIdx].so) ? [...qData[cIdx].so] : []; let idx = arr.indexOf(i); if(idx > -1) arr.splice(idx, 1); else arr.push(i); qData[cIdx].so = arr; qData[cIdx].st = "not-answered"; saveP();renQ(); }
function selTxt(v){ if(qData[cIdx].l)return; qData[cIdx].so = v; qData[cIdx].st = "not-answered"; saveP(); let el = document.querySelector("#q-area input[type='text']"); if(el && v.trim() !== "") { el.style.borderColor = "#60a5fa"; el.style.background = "rgba(96,165,250,.1)"; } else if (el) { el.style.borderColor = "#374151"; el.style.background = "#1f2937"; } }

function chkAns(){
    let q=qData[cIdx], type = q.type || 'single';
    if (type === 'single' && q.so === null) return alert("Select an option!");
    if (type === 'multi' && (!Array.isArray(q.so) || q.so.length === 0)) return alert("Select at least one option!");
    if ((type === 'match' || type === 'numeric') && (!q.so || String(q.so).trim() === "")) return alert("Enter an answer!");
    
    q.l=1; clearInterval(tmr);
    let isCor = false;
    if (type === 'single') isCor = (q.so === q.c);
    else if (type === 'multi') isCor = JSON.stringify([...q.so].sort()) === JSON.stringify([...q.c].sort());
    else if (type === 'match') isCor = String(q.so).trim().toUpperCase() === String(q.c).trim().toUpperCase();
    else if (type === 'numeric') isCor = String(q.so).trim() === String(q.c).trim();
    
    if(isCor){
        q.st="correct"; const user = firebase.auth().currentUser;
        if (user) { db.collection("users").doc(user.uid).update({ questionsSolved: firebase.firestore.FieldValue.increment(1) }).catch(err => { db.collection("users").doc(user.uid).set({ questionsSolved: 1, name: user.displayName, photoURL: user.photoURL }, { merge: true }); }); }
    } else { q.st="incorrect"; }
    saveP();renQ();updPal(); updateMarksDisplay(); setTimeout(()=>{ const solutionCont=document.querySelector(".solution-container"); if(solutionCont)solutionCont.scrollIntoView({behavior:"smooth"}); },100);
}

function updateMarksDisplay(){ let correct=0; qData.forEach(q=>{ if(q.l){ let type = q.type || 'single', isCor = false; if (type === 'single') isCor = (q.so === q.c); else if (type === 'multi') isCor = JSON.stringify([...(q.so||[])].sort()) === JSON.stringify([...(q.c||[])].sort()); else if (type === 'match') isCor = String(q.so||"").trim().toUpperCase() === String(q.c||"").trim().toUpperCase(); else if (type === 'numeric') isCor = String(q.so||"").trim() === String(q.c||"").trim(); if(isCor) correct++; } }); document.getElementById("d-marks").innerText=`Marks: ${correct*4} | Preview: ${correct}/${qData.length} Correct`; }
function nav(d){let n=cIdx+d;if(n>=0&&n<qData.length)loadQ(n);}
function renPal(){ let p=document.getElementById("pal");p.innerHTML=""; qData.forEach((q,i)=>{ let b=document.createElement("div"); b.className=`status-bubble ${q.r ? "review" : q.st}`; b.innerText=i+1; b.onclick=()=>loadQ(i); p.appendChild(b); }); updC(); }
function updPal(){ let b=document.getElementById("pal").children; qData.forEach((q,i)=>{ b[i].className=`status-bubble ${q.r ? "review" : q.st}`; if(i===cIdx)b[i].classList.add("current-q"); }); updC(); }
function updC(){ let c={"not-visited":0,"not-answered":0,correct:0,incorrect:0,review:0}; qData.forEach(q=>{ if(q.r){ c.review++; } if(c[q.st] !== undefined) { c[q.st]++; } }); document.getElementById("c-nv").innerText=c["not-visited"]; document.getElementById("c-na").innerText=c["not-answered"]; document.getElementById("c-cor").innerText=c.correct; document.getElementById("c-inc").innerText=c.incorrect; document.getElementById("c-rev").innerText=c.review; }
function closeTest(){ if(confirm("Are you sure you want to exit the Practice Session?")){ clearInterval(tmr); document.getElementById('mock-test-environment').style.display='none'; } }

// --- 7. NEW FLIPBOOK INTEGRATION LOGIC ---
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
let pageFlipObject=null, isBookLoaded=false, scale=1, posX=0, posY=0, startX, startY, startDistance, currentLoadedPdf="";
const FLIP_UI = { modal: null, loader: null, zoomContainer: null, bookWrapper: null, zoomControls: null, zoomText: null, navPrev: null, navNext: null };

function setupFlipbookBindings() {
    FLIP_UI.modal = document.getElementById('flipbook-modal'); FLIP_UI.loader = document.getElementById('loader-wrapper'); FLIP_UI.zoomContainer = document.getElementById('zoom-container'); FLIP_UI.bookWrapper = document.getElementById('book-wrapper'); FLIP_UI.zoomControls = document.getElementById('zoom-controls'); FLIP_UI.zoomText = document.getElementById('zoom-level-text'); FLIP_UI.navPrev = document.getElementById('nav-prev'); FLIP_UI.navNext = document.getElementById('nav-next');
    document.getElementById('close-btn').addEventListener('click', () => FLIP_UI.modal.style.display = 'none');
    FLIP_UI.navPrev.addEventListener('click', () => { if (pageFlipObject) pageFlipObject.flipPrev(); });
    FLIP_UI.navNext.addEventListener('click', () => { if (pageFlipObject) pageFlipObject.flipNext(); });
    initCustomTouchLogic();
}

async function openSolutionPanel() {
    if(!FLIP_UI.modal) setupFlipbookBindings();
    FLIP_UI.modal.style.display = 'block';
    const pdfUrl = chapterPdfLinks[exData.ch] || "about:blank";
    
    if (currentLoadedPdf === pdfUrl && isBookLoaded) return;
    
    currentLoadedPdf = pdfUrl; isBookLoaded = false;
    FLIP_UI.loader.style.display = 'flex'; FLIP_UI.bookWrapper.style.display = 'none'; FLIP_UI.zoomControls.style.display = 'none'; FLIP_UI.navPrev.style.display = 'none'; FLIP_UI.navNext.style.display = 'none';
    
    try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        FLIP_UI.bookWrapper.innerHTML = '';
        const renderPromises = []; for (let i = 1; i <= Math.min(pdf.numPages, 30); i++) { renderPromises.push(renderPageToHTML(pdf, i)); }
        const pageElements = await Promise.all(renderPromises); pageElements.forEach(pageEl => FLIP_UI.bookWrapper.appendChild(pageEl));

        if (pageFlipObject) pageFlipObject.destroy();
        pageFlipObject = new St.PageFlip(FLIP_UI.bookWrapper, { width: 450, height: 600, size: "fixed", minWidth: 300, maxWidth: 600, minHeight: 400, maxHeight: 800, drawShadow: true, showCover: true, usePortrait: true, mobileScrollSupport: false, useMouseEvents: false });
        pageFlipObject.loadFromHTML(document.querySelectorAll('.page'));

        FLIP_UI.loader.style.display = 'none'; FLIP_UI.bookWrapper.style.display = 'block'; FLIP_UI.zoomControls.style.display = 'flex'; FLIP_UI.navPrev.style.display = 'block'; FLIP_UI.navNext.style.display = 'block';
        scale=1; posX=0; posY=0; updateTransform(); isBookLoaded = true;
    } catch (error) { console.error(error); FLIP_UI.loader.innerHTML = `<div style="color: red; font-weight:bold;">Failed to load PDF. Check link or connection.</div>`; }
}

async function renderPageToHTML(pdfDoc, pageNumber) {
    const page = await pdfDoc.getPage(pageNumber); const viewport = page.getViewport({ scale: 1.5 });
    const pageDiv = document.createElement('div'); pageDiv.className = 'page';
    const canvas = document.createElement('canvas'); canvas.height = viewport.height; canvas.width = viewport.width;
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise; pageDiv.appendChild(canvas); return pageDiv;
}

function updateTransform() {
    const maxPan = (scale - 1) * 300; 
    if (scale === 1) { posX = 0; posY = 0; } else { posX = Math.max(-maxPan, Math.min(posX, maxPan)); posY = Math.max(-maxPan, Math.min(posY, maxPan)); }
    FLIP_UI.bookWrapper.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`; FLIP_UI.zoomText.innerText = `${Math.round(scale * 100)}%`;
}

function initCustomTouchLogic() {
    document.getElementById('zoom-in-btn').addEventListener('click', () => { scale = Math.min(scale + 0.1, 3); updateTransform(); });
    document.getElementById('zoom-out-btn').addEventListener('click', () => { scale = Math.max(scale - 0.1, 1); updateTransform(); });
    FLIP_UI.zoomContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length >= 2) { e.preventDefault(); startDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); } else if (e.touches.length === 1 && scale > 1) { startX = e.touches[0].clientX - posX; startY = e.touches[0].clientY - posY; }
    }, { passive: false });
    FLIP_UI.zoomContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length >= 2) { e.preventDefault(); let currentDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); let zoomRatio = currentDist / startDistance; scale = Math.max(1, Math.min(scale * zoomRatio, 3)); startDistance = currentDist; updateTransform(); } else if (e.touches.length === 1 && scale > 1) { e.preventDefault(); posX = e.touches[0].clientX - startX; posY = e.touches[0].clientY - startY; updateTransform(); }
    }, { passive: false });
    let isDragging = false;
    FLIP_UI.zoomContainer.addEventListener('mousedown', (e) => { if(scale > 1) { isDragging = true; startX = e.clientX - posX; startY = e.clientY - posY; e.preventDefault(); } });
    window.addEventListener('mousemove', (e) => { if(isDragging && scale > 1) { posX = e.clientX - startX; posY = e.clientY - startY; updateTransform(); } });
    window.addEventListener('mouseup', () => isDragging = false);
}

// --- 8. 3D SPACE ANIMATION INTEGRATION (HOME PAGE ONLY) ---
let threeCamera,threeScene,threeRenderer,threeMaterial,threeMouseX=0,threeMouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2;
function initSpaceAnimation(){const container=document.getElementById('canvas-container');if(!container)return;threeCamera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,5,2000);threeCamera.position.z=500;threeScene=new THREE.Scene();threeScene.fog=new THREE.FogExp2(0x0000ff,0.001);const geometry=new THREE.BufferGeometry(),vertices=[],size=2000;for(let i=0;i<20000;i++){const x=(Math.random()*size+Math.random()*size)/2-size/2,y=(Math.random()*size+Math.random()*size)/2-size/2,z=(Math.random()*size+Math.random()*size)/2-size/2;vertices.push(x,y,z);}geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));threeMaterial=new THREE.PointsMaterial({size:2,color:0xffffff});const particles=new THREE.Points(geometry,threeMaterial);threeScene.add(particles);threeRenderer=new THREE.WebGLRenderer({alpha:true});threeRenderer.setPixelRatio(window.devicePixelRatio);threeRenderer.setSize(window.innerWidth,window.innerHeight);container.appendChild(threeRenderer.domElement);document.addEventListener('pointermove',onPointerMove);window.addEventListener('resize',onWindowResize);}
function onWindowResize(){windowHalfX=window.innerWidth/2;windowHalfY=window.innerHeight/2;threeCamera.aspect=window.innerWidth/window.innerHeight;threeCamera.updateProjectionMatrix();threeRenderer.setSize(window.innerWidth,window.innerHeight);}
function onPointerMove(event){threeMouseX=event.clientX-windowHalfX;threeMouseY=event.clientY-windowHalfY;}
function animateSpace(){requestAnimationFrame(animateSpace);if(document.getElementById('home').classList.contains('active')){renderSpace();}}
function renderSpace(){threeCamera.position.x+=(threeMouseX*2-threeCamera.position.x)*0.02;threeCamera.position.y+=(-threeMouseY*2-threeCamera.position.y)*0.02;threeCamera.lookAt(threeScene.position);threeRenderer.render(threeScene,threeCamera);threeScene.rotation.x+=0.001;threeScene.rotation.y+=0.002;}

// --- INITIALIZATION ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    loopTypewriter(); initSpaceAnimation(); animateSpace(); initLiveLeaderboard(); 
    // FIX 1 CONTINUED: Load last visited tab so refresh doesn't break user flow
    const savedTab = localStorage.getItem('activeJEEastraTab') || 'home'; switchTab(savedTab);
});
window.addEventListener('load', () => { setTimeout(() => { const preloader = document.getElementById('preloader'); preloader.style.opacity = '0'; setTimeout(() => { preloader.style.visibility = 'hidden'; preloader.style.display = 'none'; }, 500); }, 1200); });
