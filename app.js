// --- 1. DYNAMIC CSS & UI INJECTION (MAXIMUM ENHANCEMENTS + PREMIUM MOBILE UX) ---
const style=document.createElement('style');
style.textContent=`:root{--bg-color:#050814;--surface-color:rgba(22, 27, 46, 0.7);--text-primary:#ffffff;--text-secondary:#94a3b8;--accent-color:#ffffff;--highlight:#3b82f6;--glow-highlight:rgba(59, 130, 246, 0.6);--border-color:rgba(255,255,255,0.1);--leaderboard-bg:#0a0f1c;--diamond-color:#bc6bf0;--gift-color:#ef8716;--text-shadow-color:#ffffff;--dropdown-bg:#1e1f22;--ring-gradient:conic-gradient(#ea4335,#4285f4,#34a853,#fbbc05,#ea4335)}
body.light-mode{--bg-color:#f1f5f9;--surface-color:rgba(255, 255, 255, 0.8);--text-primary:#0f172a;--text-secondary:#475569;--accent-color:#000000;--highlight:#2563eb;--glow-highlight:rgba(37, 99, 235, 0.4);--border-color:rgba(0,0,0,0.1);--leaderboard-bg:#e2e8f0;--dropdown-bg:#ffffff;--text-shadow-color:rgba(0,0,0,0.2)}
*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',-apple-system,sans-serif;}
::-webkit-scrollbar{width:8px;height:8px;}
::-webkit-scrollbar-track{background:rgba(0,0,0,0.1);border-radius:10px;}
::-webkit-scrollbar-thumb{background:var(--highlight);border-radius:10px;}
::-webkit-scrollbar-thumb:hover{background:var(--glow-highlight);}
body{background:radial-gradient(circle at top right, var(--bg-color), #000000);color:var(--text-primary);overflow-x:hidden;display:flex;flex-direction:column;height:100vh;transition:all 0.4s ease;}
header{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;border-bottom:1px solid var(--border-color);background-color:rgba(10, 15, 28, 0.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);position:sticky;top:0;z-index:100;box-shadow:0 4px 30px rgba(0,0,0,0.3);}
.brand{display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform 0.3s;}
.brand:hover{transform:scale(1.02);}

/* NEON GLOW PULSE ADDED HERE */
.brand h1{font-size:28px;font-weight:800;letter-spacing:2px;display:flex;align-items:center;white-space:nowrap;color:#ffffff;animation: neonPulse 1.5s ease-in-out infinite alternate;} 
#typed-text { display: inline-block; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: bottom; }
@keyframes neonPulse { 
    from { text-shadow: 0 0 5px #fff, 0 0 10px var(--highlight), 0 0 20px var(--highlight), 0 0 40px var(--highlight); } 
    to { text-shadow: 0 0 2px #fff, 0 0 5px var(--highlight), 0 0 10px var(--highlight), 0 0 20px var(--highlight); } 
}

.cursor{font-weight:300;margin-left:2px;color:var(--highlight);animation:blink 0.8s infinite alternate;position:relative;top:-2px}
@keyframes blink{0%{opacity:0}100%{opacity:1}}
.custom-badges{display:flex;gap:8px;margin-left:10px;align-items:center}
.custom-badges svg{width:22px;height:22px;overflow:visible}
.diamond{filter:drop-shadow(0 0 5px rgba(188,107,240,0.6)) drop-shadow(0 0 12px rgba(188,107,240,0.4));animation:flow-glow-diamond 2s ease-in-out infinite alternate}
.gift{filter:drop-shadow(0 0 5px rgba(239,135,22,0.6)) drop-shadow(0 0 12px rgba(239,135,22,0.4));animation:flow-glow-gift 2s ease-in-out infinite alternate 1s}
@keyframes flow-glow-diamond{0%{transform:translateY(1px) scale(0.95)}100%{transform:translateY(-3px) scale(1.05);filter:drop-shadow(0 0 15px rgba(188,107,240,0.9))}}
@keyframes flow-glow-gift{0%{transform:translateY(1px) scale(0.95)}100%{transform:translateY(-3px) scale(1.05);filter:drop-shadow(0 0 15px rgba(239,135,22,0.9))}}
nav{display:flex;gap:2.5rem;position:absolute;left:50%;transform:translateX(-50%)}
nav button{background:none;border:none;color:var(--text-secondary);font-size:1.1rem;font-weight:500;cursor:pointer;transition:all 0.3s ease;position:relative;padding:5px 10px;}
nav button::after{content:'';position:absolute;width:0;height:3px;border-radius:3px;bottom:-8px;left:50%;background-color:var(--highlight);transition:all 0.3s ease;transform:translateX(-50%);box-shadow:0 0 12px var(--glow-highlight)}
nav button.active,nav button:hover{color:var(--text-primary);text-shadow:0 0 15px var(--glow-highlight)}
nav button.active::after,nav button:hover::after{width:100%}
.header-actions{display:flex;align-items:center;gap:1.2rem}
.search-bar{background-color:rgba(255,255,255,0.05);border:1px solid var(--border-color);color:var(--text-primary);padding:0.7rem 1.4rem;border-radius:25px;outline:none;display:none;transition:all 0.3s;backdrop-filter:blur(10px);}
.search-bar:focus{border-color:var(--highlight);box-shadow:0 0 15px var(--glow-highlight);background-color:rgba(255,255,255,0.1);}
.icon-btn{background:var(--surface-color);border:1px solid var(--border-color);color:var(--text-primary);width:42px;height:42px;border-radius:50%;font-size:1.2rem;cursor:pointer;transition:all 0.3s;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(5px);}
.icon-btn:hover{box-shadow:0 0 15px var(--glow-highlight);transform:rotate(15deg);border-color:var(--highlight);}
.btn-google{background:linear-gradient(135deg, #ffffff, #e2e8f0);color:#0f172a;border:none;padding:10px 22px;border-radius:12px;cursor:pointer;font-weight:700;font-size:0.95rem;display:flex;align-items:center;gap:10px;transition:all 0.3s;box-shadow:0 4px 15px rgba(255,255,255,0.15);}
.btn-google:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 6px 20px rgba(255,255,255,0.3);}
.profile-wrapper{position:relative;display:none}.nav-profile-pic{width:45px;height:45px;border-radius:50%;cursor:pointer;object-fit:cover;border:2px solid transparent;transition:all 0.3s}.nav-profile-pic:hover{border:2px solid var(--highlight);box-shadow:0 0 15px var(--glow-highlight);transform:scale(1.1);}
.profile-dropdown{position:absolute;top:65px;right:0;background-color:rgba(20, 25, 40, 0.95);backdrop-filter:blur(20px);width:300px;border-radius:20px;padding:25px 20px;border:1px solid var(--border-color);box-shadow:0 15px 40px rgba(0,0,0,0.6);display:flex;flex-direction:column;align-items:center;z-index:200;opacity:0;visibility:hidden;transform:translateY(-15px);transition:all 0.4s cubic-bezier(0.4,0,0.2,1)}
.profile-dropdown.show{opacity:1;visibility:visible;transform:translateY(0)}
.dropdown-email{font-size:0.9rem;color:var(--text-secondary);margin-bottom:20px;text-align:center;width:100%}
.profile-ring-container{position:relative;width:86px;height:86px;border-radius:50%;background:var(--ring-gradient);display:flex;align-items:center;justify-content:center;margin-bottom:15px;animation:spin 4s linear infinite;}
.profile-ring-container img {animation:spin-reverse 4s linear infinite;}
@keyframes spin-reverse { 100% {transform:rotate(-360deg);} }
.dropdown-profile-pic{width:78px;height:78px;border-radius:50%;object-fit:cover;background-color:var(--dropdown-bg);border:3px solid var(--dropdown-bg)}
.dropdown-greeting{font-size:1.3rem;font-weight:600;margin-bottom:25px;color:var(--text-primary)}
.btn-logout{background-color:transparent;color:#ef4444;border:2px solid rgba(239,68,68,0.3);padding:10px 28px;border-radius:25px;cursor:pointer;font-size:0.95rem;font-weight:600;transition:all 0.3s;width:100%;}
.btn-logout:hover{background-color:rgba(239,68,68,0.1);border-color:#ef4444;box-shadow:0 0 15px rgba(239,68,68,0.4);transform:translateY(-2px);}
main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.tab-content{display:none;flex:1;height:100%;overflow-y:auto}
.tab-content.active{display:flex;animation:fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)}
@keyframes fadeIn{from{opacity:0;transform:translateY(20px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}
#home{flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;background:radial-gradient(circle at center,rgba(59,130,246,0.15) 0%,transparent 65%)}
#home::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:50px 50px;opacity:0.5;z-index:-1;pointer-events:none}
#canvas-container{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-2;overflow:hidden;pointer-events:none}
.hero{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;z-index:10;}
.hero h1{font-size:4.5rem;margin-bottom:1rem;font-weight:800;background:linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0px 10px 20px rgba(59,130,246,0.3));}
.hero p.tagline{color:var(--highlight);font-weight:600;letter-spacing:4px;text-transform:uppercase;margin-bottom:15px;text-align:center;text-shadow:0 0 10px var(--glow-highlight);}
.hero p.desc{color:var(--text-secondary);margin-bottom:3rem;font-size:1.2rem;max-width:600px;line-height:1.7;text-align:center}
.hero-buttons{display:flex;gap:2rem;justify-content:center}
.btn-primary{background:linear-gradient(135deg, #3b82f6, #2563eb);color:#fff;border:none;padding:1rem 2.5rem;border-radius:30px;font-size:1.1rem;font-weight:600;cursor:pointer;box-shadow:0 8px 25px rgba(37,99,235,0.4);transition:all 0.3s}
.btn-primary:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 12px 30px rgba(37,99,235,0.6)}
.btn-outline{background:rgba(255,255,255,0.03);border:2px solid rgba(255,255,255,0.1);color:var(--text-primary);padding:1rem 2.5rem;border-radius:30px;font-weight:600;font-size:1.1rem;cursor:pointer;transition:all 0.3s;backdrop-filter:blur(10px)}
.btn-outline:hover{background:rgba(255,255,255,0.1);border-color:var(--highlight);box-shadow:0 0 20px var(--glow-highlight);transform:translateY(-3px);}
.sliding-panel{position:fixed;bottom:-100%;left:0;width:100%;height:60vh;background:rgba(15, 23, 42, 0.95);backdrop-filter:blur(25px);border-top:1px solid var(--border-color);transition:bottom 0.5s cubic-bezier(0.16,1,0.3,1);z-index:200;padding:4rem;box-shadow:0 -10px 50px rgba(0,0,0,0.6);overflow-y:auto;border-top-left-radius:30px;border-top-right-radius:30px;}
.sliding-panel.open{bottom:0}.close-panel{position:absolute;top:1.5rem;right:2.5rem;background:rgba(255,255,255,0.1);border:none;color:var(--text-primary);width:45px;height:45px;border-radius:50%;font-size:1.5rem;cursor:pointer;transition:all 0.3s;}
.close-panel:hover{background:#ef4444;transform:rotate(90deg);box-shadow:0 0 15px rgba(239,68,68,0.5);}
#practice{flex-direction:row}.sidebar{width:320px;border-right:1px solid var(--border-color);padding:2rem 1.5rem;overflow-y:auto;background-color:rgba(10, 15, 28, 0.5);backdrop-filter:blur(10px);}
.sidebar h3{font-size:1rem;color:var(--highlight);text-transform:uppercase;margin-bottom:1.5rem;letter-spacing:2px;font-weight:700;}
.category{margin-bottom:2rem}.category-title{color:var(--text-primary);font-weight:700;font-size:1.1rem;margin-bottom:1rem;padding-bottom:0.5rem;border-bottom:2px solid rgba(255,255,255,0.05)}
.chapter-list{list-style:none}.chapter-list li{padding:0.8rem 1.2rem;color:var(--text-secondary);cursor:pointer;transition:all 0.3s;border-radius:10px;margin-bottom:5px;font-weight:500;}
.chapter-list li:hover{color:var(--text-primary);background:rgba(255,255,255,0.05);transform:translateX(5px);}
.chapter-list li.selected{color:#ffffff;font-weight:700;background:linear-gradient(90deg, rgba(59,130,246,0.2), transparent);border-left:4px solid var(--highlight);box-shadow:inset 10px 0 20px -10px rgba(59,130,246,0.5);}
.exercises-container{flex:1;padding:3rem;overflow-y:auto;background-color:transparent;}
.exercise-card{background:linear-gradient(145deg, rgba(30,41,59,0.7), rgba(15,23,42,0.7));backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:2rem;margin-bottom:1.5rem;cursor:pointer;transition:all 0.4s cubic-bezier(0.16,1,0.3,1);display:flex;justify-content:space-between;align-items:center;box-shadow:0 10px 30px rgba(0,0,0,0.2);}
.exercise-card:hover{transform:translateY(-5px) scale(1.01);border-color:rgba(59,130,246,0.5);box-shadow:0 15px 40px rgba(59,130,246,0.2);background:linear-gradient(145deg, rgba(30,41,59,0.9), rgba(15,23,42,0.9));}
.exercise-card h3{color:var(--text-primary);font-size:1.3rem;margin-bottom:8px;}
#leaderboard{background:var(--bg-color);flex-direction:column;align-items:center;padding:4rem 2rem}
.rankings-header{font-size:2.5rem;font-weight:800;color:var(--text-primary);letter-spacing:4px;margin-bottom:3rem;text-transform:uppercase;display:flex;align-items:center;gap:20px;text-shadow:0 0 20px var(--glow-highlight);}
.rankings-header::before,.rankings-header::after{content:'';height:3px;width:80px;background:linear-gradient(90deg, transparent, var(--highlight), transparent);box-shadow:0 0 15px var(--glow-highlight)}
.lb-list{width:100%;max-width:750px;background:rgba(15,23,42,0.6);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:1.5rem;box-shadow:0 20px 50px rgba(0,0,0,0.4)}
.lb-empty-state{text-align:center;padding:4rem 1rem;color:var(--text-secondary);font-size:1.2rem;font-weight:500;}
.lb-row{display:flex;align-items:center;justify-content:space-between;padding:1.5rem;border-bottom:1px solid rgba(255,255,255,0.05);transition:all 0.3s;border-radius:12px;margin-bottom:5px;}
.lb-row:last-child{border:none;margin-bottom:0;}
.lb-row:hover{background:rgba(59,130,246,0.1);transform:scale(1.02);box-shadow:0 5px 15px rgba(0,0,0,0.2);border-color:transparent;}
.lb-user{display:flex;align-items:center;gap:1.5rem}
.rank-badge{font-weight:800;font-size:1.4rem;color:var(--highlight);width:40px;text-align:center;text-shadow:0 0 10px rgba(59,130,246,0.5);}
.small-avatar{width:55px;height:55px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,0.1);box-shadow:0 5px 15px rgba(0,0,0,0.3);}
.lb-name{font-weight:700;color:var(--text-primary);font-size:1.15rem}
.lb-stats{font-size:0.95rem;color:var(--highlight);font-weight:500;}
.lb-score{font-weight:800;font-size:1.2rem;color:#ffffff;background:linear-gradient(135deg, #3b82f6, #2563eb);padding:8px 18px;border-radius:25px;box-shadow:0 5px 15px rgba(37,99,235,0.4);}

/* TEST ENVIRONMENT ENHANCEMENTS */
.mock-test-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#020617;z-index:999;flex-direction:column;overflow:hidden}
.practice-header,.question-header,.action-bar{padding:20px 30px;background:rgba(15,23,42,0.8);backdrop-filter:blur(10px);display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.05);}
.action-bar{border-top:1px solid rgba(255,255,255,0.05);border-bottom:none;}
.btn-end{background:linear-gradient(135deg, #ef4444, #dc2626);color:#fff;padding:10px 24px;border:none;border-radius:8px;cursor:pointer;font-weight:700;box-shadow:0 4px 15px rgba(239,68,68,0.3);transition:all 0.3s;}
.btn-end:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(239,68,68,0.5);}
.practice-container{display:flex;flex:1;padding:20px;gap:20px;overflow:hidden;background:#020617;background-image:radial-gradient(circle at center, rgba(59,130,246,0.05) 0%, transparent 70%);}
.left-panel,.right-panel{background:rgba(15,23,42,0.6);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.1);display:flex;flex-direction:column;border-radius:20px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.5);}
.left-panel{flex:3}.right-panel{flex:1;min-width:340px}
.stopwatch{display:flex;gap:8px;background:rgba(0,0,0,0.3);padding:8px 18px;border-radius:25px;color:#38bdf8;font-family:monospace;font-size:1.1rem;font-weight:700;border:1px solid rgba(56,189,248,0.2);box-shadow:inset 0 0 10px rgba(0,0,0,0.5);}
.question-area{padding:40px;flex:1;overflow-y:auto;color:#f8fafc;font-size:1.1rem;}
.btn{padding:12px 28px;border:none;border-radius:10px;color:#fff;cursor:pointer;font-weight:700;font-size:1rem;transition:all 0.3s;box-shadow:0 4px 15px rgba(0,0,0,0.2);}
.btn-check{background:linear-gradient(135deg, #3b82f6, #2563eb);box-shadow:0 4px 15px rgba(37,99,235,0.4);}
.btn-check:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 25px rgba(37,99,235,0.6);}
.btn-check:disabled{background:#475569;cursor:not-allowed;box-shadow:none;transform:none;}
.btn-nav{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);}
.btn-nav:hover{background:rgba(255,255,255,0.2);transform:translateY(-2px);}
.candidate-info,.legend-grid{padding:25px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;gap:15px;background:rgba(0,0,0,0.2);}
.legend-grid{flex-wrap:wrap;background:transparent;}
.palette-container{padding:25px;display:grid;grid-template-columns:repeat(auto-fill,minmax(48px,1fr));gap:12px;overflow-y:auto;align-content:start;}
.status-bubble{width:36px;height:36px;display:flex;justify-content:center;align-items:center;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:0.9rem;transition:all 0.2s;box-shadow:0 4px 10px rgba(0,0,0,0.2);}
.status-bubble:hover{transform:translateY(-3px) scale(1.1);box-shadow:0 6px 15px rgba(0,0,0,0.3);}
.not-visited{background:#334155;color:#94a3b8;border:1px solid rgba(255,255,255,0.05);}
.not-answered{background:#e2e8f0;color:#0f172a;}
.correct{background:linear-gradient(135deg, #10b981, #059669);box-shadow:0 4px 15px rgba(16,185,129,0.3);}
.incorrect{background:linear-gradient(135deg, #ef4444, #dc2626);box-shadow:0 4px 15px rgba(239,68,68,0.3);}
.review{background:linear-gradient(135deg, #f59e0b, #d97706) !important;color:#fff !important;border:none;box-shadow:0 4px 15px rgba(245,158,11,0.3);}
.current-q{border:2px solid #ffffff !important;transform:scale(1.15);box-shadow:0 0 15px rgba(255,255,255,0.6);}
.solution-container{display:none;margin-top:35px;padding:25px;background:rgba(16,185,129,0.05);border-left:4px solid #10b981;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.2);animation:fadeIn 0.5s ease;}

/* EX2 ANIMATIONS */
@keyframes popCheck { 0% {transform:scale(0.9); opacity:0;} 50% {transform:scale(1.05);} 100% {transform:scale(1); opacity:1;} }
.correct-anim {animation: popCheck 0.4s cubic-bezier(0.16,1,0.3,1);}
.incorrect-anim {animation: popCheck 0.4s cubic-bezier(0.16,1,0.3,1);}

/* PDF FLIPBOOK STYLES */
.fb-page { background-color: white; overflow: hidden; display: flex; justify-content: center; align-items: center; border: 1px solid #ddd; }
.fb-page canvas { width: 100%; height: 100%; object-fit: contain; }
.nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); font-size: 40px; color: rgba(255, 255, 255, 0.6); cursor: pointer; z-index: 1020; display: none; background: rgba(0, 0, 0, 0.4); padding: 15px 10px; border-radius: 8px; transition: background 0.3s, color 0.3s; }
.nav-arrow:hover { color: white; background: rgba(0, 0, 0, 0.8); }
#nav-prev { left: 15px; }
#nav-next { right: 15px; }

.hamburger-btn { display: none; }

/* =========================================================
   MOBILE EXCLUSIVE PREMIUM UI OVERRIDE (MAX 768px)
   ========================================================= */
@media screen and (max-width: 768px) {
    /* Premium Native App-style Header */
    header { flex-wrap: nowrap; padding: 12px 15px; z-index: 2000; position: sticky; top: 0; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .hamburger-btn.active-tab { display: flex !important; align-items: center; justify-content: center; background: none; border: none; color: white; font-size: 28px; padding: 0 15px 0 0; cursor: pointer; transition: transform 0.2s; }
    .hamburger-btn:active { transform: scale(0.9); }
    
    /* Typewriter Wrap Fix */
    .brand h1 { font-size: 1.25rem !important; white-space: nowrap; }
    #typed-text { max-width: 110px; display: inline-block; overflow: hidden; text-overflow: ellipsis; vertical-align: bottom; }
    
    /* Premium Native App-style Bottom Navigation */
    nav { 
        position: fixed; bottom: 0; left: 0; width: 100%; 
        background: rgba(10, 15, 28, 0.95); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
        border-top: 1px solid rgba(255,255,255,0.1); 
        padding: 15px 0 20px 0; margin: 0; transform: none; order: unset; 
        justify-content: space-evenly; z-index: 1000;
        box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
        border-top-left-radius: 25px; border-top-right-radius: 25px;
    }
    nav button { font-size: 0.95rem; padding: 8px 15px; }
    nav button::after { bottom: -6px; height: 4px; border-radius: 4px; }
    
    /* Main Content Spacing for Bottom Nav */
    main { padding-bottom: 80px; }
    
    /* Hero Section Fix */
    .hero h1 { font-size: 2.8rem; text-align: center; line-height: 1.2; padding: 0 10px; }
    .hero p.desc { font-size: 1rem; padding: 0 1.5rem; }
    .hero-buttons { flex-direction: column; width: 100%; padding: 0 2rem; gap: 1rem; align-items: center; }
    .btn-primary, .btn-outline { width: 100%; max-width: 300px; text-align: center; }
    
    /* Practice Tab - Hamburger Drawer Implementation */
    #practice { flex-direction: row; position: relative; }
    
    /* Premium Glassmorphism Drawer */
    .sidebar { 
        position: fixed; top: 0; left: -320px; width: 280px; height: 100vh; 
        background: rgba(10, 15, 28, 0.98); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
        border-right: 1px solid rgba(255,255,255,0.1); border-bottom: none;
        z-index: 3000; transition: left 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
        max-height: 100vh; padding: 80px 1.5rem 6rem 1.5rem; /* Room for header and bottom nav */
        box-shadow: none; 
    }
    .sidebar.open { left: 0; box-shadow: 20px 0 60px rgba(0,0,0,0.7); }
    
    /* Drawer Overlay */
    .sidebar-overlay { 
        display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
        background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
        z-index: 2999; opacity: 0; transition: opacity 0.4s ease; 
    }
    .sidebar-overlay.show { display: block; opacity: 1; }
    
    .exercises-container { padding: 1.5rem 1rem 2rem 1rem; width: 100%; overflow-y: auto; }
    .exercise-card { flex-direction: column; align-items: flex-start; gap: 15px; padding: 1.5rem; border-radius: 20px; }
    
    /* Leaderboard Fixes - Strict Row Layout */
    #leaderboard { padding: 2rem 1rem; }
    .rankings-header { font-size: 1.8rem; text-align: center; justify-content: center; margin-bottom: 2rem; white-space: nowrap; }
    .lb-list { padding: 1rem; border-radius: 20px; }
    
    /* Ensure elements don't stack on mobile */
    .lb-row { flex-direction: row !important; align-items: center !important; gap: 10px; padding: 1rem 0.5rem; text-align: left !important; }
    .lb-user { flex: 1; gap: 10px; min-width: 0; display: flex; align-items: center; }
    .rank-badge { font-size: 1.2rem; width: 30px; }
    .small-avatar { width: 42px; height: 42px; border-width: 2px; }
    
    /* Name and Stat Truncation Magic */
    .lb-name { font-size: 1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px; }
    .lb-stats { font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px; }
    .lb-score { margin-left: auto !important; padding: 6px 10px; font-size: 0.85rem; align-self: center !important; white-space: nowrap; }

    /* Test Environment Enhancements */
    .practice-container { flex-direction: column; overflow-y: auto; padding: 10px; gap: 10px; }
    .left-panel, .right-panel { flex: none; width: 100%; min-width: 100%; border-radius: 16px; }
    .question-header { flex-wrap: wrap; gap: 10px; }
    .action-bar { flex-wrap: wrap; gap: 10px; justify-content: space-between; }
    .btn { padding: 10px 15px; font-size: 0.9rem; }
    
    .header-actions { gap: 12px; }
    .search-bar { width: 130px; padding: 0.5rem 1rem; font-size: 0.85rem; }
    .btn-google { padding: 8px 12px; font-size: 0.85rem; }
    .icon-btn { width: 38px; height: 38px; font-size: 1.1rem; }
}`;
document.head.appendChild(style);

// --- Inject Dynamic Hamburger Button and Header ---
document.getElementById('inject-header').outerHTML=`
<header>
    <div style="display:flex; align-items:center;">
        <button id="mobile-menu-btn" class="hamburger-btn" onclick="toggleMobileSidebar()">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <div class="brand" onclick="switchTab('home')">
            <h1><span id="typed-text"></span><span class="cursor">|</span><span class="custom-badges"><svg class="diamond" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><mask id="diamondMask"><rect width="100" height="100" fill="white" /><g stroke="black" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="48" x2="95" y2="48" /><line x1="22" y1="20" x2="50" y2="48" /><line x1="78" y1="20" x2="50" y2="48" /><line x1="28" y1="48" x2="50" y2="92" /><line x1="72" y1="48" x2="50" y2="92" /></g></mask></defs><polygon points="50,92 5,48 22,20 78,20 95,48" fill="var(--diamond-color)" mask="url(#diamondMask)" /></svg><svg class="gift" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><mask id="giftMask"><rect width="100" height="100" fill="white" /><rect x="46" y="40" width="8" height="55" fill="black" /><rect x="15" y="66" width="70" height="7" fill="black" /></mask></defs><path d="M 45 43 C 25 12, 10 38, 43 43" stroke="var(--gift-color)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M 55 43 C 75 12, 90 38, 57 43" stroke="var(--gift-color)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g mask="url(#giftMask)"><rect x="22" y="54" width="56" height="38" rx="6" fill="var(--gift-color)" /><rect x="16" y="42" width="68" height="12" rx="4" fill="var(--gift-color)" /></g></svg></span></h1>
        </div>
    </div>
    <nav>
        <button id="btn-tab-home" onclick="switchTab('home')">Home</button>
        <button id="btn-tab-practice" onclick="switchTab('practice')">Practice</button>
        <button id="btn-tab-leaderboard" onclick="switchTab('leaderboard')">Leaderboard</button>
    </nav>
    <div class="header-actions">
        <input type="text" class="search-bar" id="search-input" placeholder="Search Chapters..." onkeyup="filterChapters()">
        <button id="btn-login" class="btn-google" onclick="signInWithGoogle()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>Sign In</button>
        <div id="profile-wrapper" class="profile-wrapper">
            <img id="nav-profile-pic" class="nav-profile-pic" src="" alt="Profile" onclick="toggleDropdown()" referrerpolicy="no-referrer">
            <div id="profile-dropdown" class="profile-dropdown">
                <div class="dropdown-email" id="user-email">email@example.com</div>
                <div class="profile-ring-container"><img id="dropdown-profile-pic" class="dropdown-profile-pic" src="" alt="Profile Large" referrerpolicy="no-referrer"></div>
                <div class="dropdown-greeting" id="user-greeting">Hi, USER!</div>
                <button class="btn-logout" onclick="signOutUser()">Sign out</button>
            </div>
        </div>
        <button class="icon-btn" id="theme-toggle" onclick="toggleTheme()">☾</button>
    </div>
</header>`;

document.getElementById('inject-home').outerHTML=`<div id="home" class="tab-content"><div id="canvas-container"></div><div class="hero"><p class="tagline">Welcome to the Matrix</p><h1>Elevate Your JEE Prep</h1><p class="desc">Experience a seamless, user-centric practice environment meticulously crafted for JEE Advanced aspirants. Sync your progress and conquer standard references.</p><div class="hero-buttons"><button class="btn-primary" onclick="switchTab('practice')">Start Practicing</button><button class="btn-outline" onclick="togglePanel()">Platform Info</button></div></div><div class="sliding-panel" id="info-panel"><button class="close-panel" onclick="togglePanel()">×</button><h2 style="color:var(--text-primary);margin-bottom:1rem; font-size:2rem;">About The Platform</h2><p style="color:var(--text-secondary);line-height:1.8;margin-bottom:1rem; font-size:1.1rem;">Hello, I am AADARSH currently I'm building this site , Creating user-centric solutions for a better tomorrow.</p><p style="color:var(--text-secondary);line-height:1.8; font-size:1.1rem;">This section is dedicated to rigorous JEE Advanced preparation. Here, you will find meticulously digitized chapters from standard references like the complete Black Book. Click on 'Start Practicing' to resume exactly where you left off in your mock tests.</p></div></div>`;
document.getElementById('inject-leaderboard').outerHTML=`<div id="leaderboard" class="tab-content"><div class="rankings-header">GLOBAL RANKINGS</div><div class="lb-list" id="leaderboard-container"><div class="lb-empty-state" id="lb-empty-state">No members currently or loading data... Sign in and start practicing to get ranked!</div><div id="lb-dynamic-content" style="display:none; width: 100%;"></div></div></div>`;

// Inject Overlay for Mobile Sidebar dynamically
const overlayDiv = document.createElement('div');
overlayDiv.id = 'mobile-sidebar-overlay';
overlayDiv.className = 'sidebar-overlay';
overlayDiv.onclick = toggleMobileSidebar;
document.body.appendChild(overlayDiv);


// --- 2. TYPEWRITER EFFECT LOGIC ---
let textToType="U2",charIndex=0,isDeleting=false,typingTimeout;
const typeDelayMs=90,deleteDelayMs=80,holdDelayMs=2500,pauseDelayMs=500,typedTextSpan=document.getElementById('typed-text');
function loopTypewriter(){const characters=Array.from(textToType);if(isDeleting){if(charIndex>0){charIndex--;typedTextSpan.textContent=characters.slice(0,charIndex).join('');typingTimeout=setTimeout(loopTypewriter,deleteDelayMs);}else{isDeleting=false;typingTimeout=setTimeout(loopTypewriter,pauseDelayMs);}}else{if(charIndex<characters.length){charIndex++;typedTextSpan.textContent=characters.slice(0,charIndex).join('');typingTimeout=setTimeout(loopTypewriter,typeDelayMs);}else{isDeleting=true;typingTimeout=setTimeout(loopTypewriter,holdDelayMs);}}}
function updateBrandText(newText){clearTimeout(typingTimeout);textToType=newText.toUpperCase();charIndex=0;isDeleting=false;typedTextSpan.textContent="";loopTypewriter();}

// --- NEW: EXACT GITHUB PDF SOLUTIONS DIRECTORY ---
const PDF_BASE_URL = "https://raw.githubusercontent.com/Aadarsh123321/JEE27-./main/";
const chapterPdfLinks = {
    // Calculus
    "Function": "Function%20sol.pdf",
    "Limit": "Limits%20sol.pdf",
    "Continuity & Differentiability": "CDD%20Solution%20.pdf",
    "Application of Derivatives": "AOD%20sol.pdf",
    "Integration": "Indefinite%20sol.pdf",
    "Area Under Curves": "AUC%20sol.pdf",
    "Differential Equations": "DE%20sol.pdf",
    
    // Algebra
    "Quadratic Equations": "Quadratic%20sol.pdf",
    "Sequence and Series": "Sequence%20sol.pdf",
    "Determinants": "Determinants%20sol.pdf",
    "Complex Numbers": "Complex%20sol.pdf",
    "Matrices": "Matrices%20sol.pdf",
    "Permutation & Combinations": "Pnc%20sol.pdf",
    "Binomial Theorem": "BINOMIAL%20sol.pdf",
    "Probability": "Probability%20sol.pdf",
    "Logarithms": "Logarithm%20sol.pdf",

    // Co-ordinate Geometry
    "Straight Lines": "Straight%20line%20sol.pdf",
    "Circle": "Circle%20sol.pdf",
    "Parabola": "Parabola%20sol.pdf",
    "Ellipse": "Ellipse%20sol.pdf",
    "Hyperbola": "Hyperbola%20sol.pdf",
    
    // Trigonometry
    "Compound Angles": "Compound%20Angles%20sol.pdf",
    "Trigonometric Equations": "Trigo%20slo.pdf",
    "Solution of Triangles": "Sot%20sol.pdf",
    "Inverse Trigonometric Functions": "ITF%20sol.pdf",
    
    // Vector & 3D
    "Vector & 3Dimensional Geometry": "Vectro%203d%20sol.pdf"
};

// --- 3. FIREBASE CONFIG & LIVE LEADERBOARD LOGIC ---
const firebaseConfig = {
  apiKey: "AIzaSyAH22AT6fP9cuDAFq8sXBLi9GFu9cvWgE4",
  authDomain: "jee-bb.firebaseapp.com",
  projectId: "jee-bb",
  storageBucket: "jee-bb.firebasestorage.app",
  messagingSenderId: "341400606572",
  appId: "1:341400606572:web:6b992fd542d29e9da68549",
  measurementId: "G-3CMSTEF4CR"
};
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}

const auth=firebase.auth();
const db=firebase.firestore(); 
const loginBtn=document.getElementById('btn-login'),profileWrapper=document.getElementById('profile-wrapper'),dropdown=document.getElementById('profile-dropdown');

function initLiveLeaderboard() {
    const lbContainer = document.getElementById('lb-dynamic-content');
    const lbEmpty = document.getElementById('lb-empty-state');
    
    db.collection("users").orderBy("questionsSolved", "desc").limit(1000)
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.empty) {
            lbEmpty.style.display = 'block';
            lbContainer.style.display = 'none';
            return;
        }
        lbEmpty.style.display = 'none';
        lbContainer.style.display = 'block';
        lbContainer.innerHTML = ''; 

        let rank = 1;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const score = data.questionsSolved || 0;
            const rowHTML = `
            <div class="lb-row">
                <div class="lb-user">
                    <div class="rank-badge">#${rank}</div>
                    <img class="small-avatar" src="${data.photoURL}" alt="Avatar" referrerpolicy="no-referrer">
                    <div style="min-width:0;">
                        <div class="lb-name">${data.name}</div>
                        <div class="lb-stats">JEE Advanced Aspirant</div>
                    </div>
                </div>
                <div class="lb-score">${score} Qns Solved</div>
            </div>`;
            lbContainer.insertAdjacentHTML('beforeend', rowHTML);
            rank++;
        });
    }, (error) => {
        console.error("Live Leaderboard Error: ", error);
    });
}

auth.onAuthStateChanged(user=>{
    if(user){
        loginBtn.style.display='none';
        profileWrapper.style.display='block';
        const photoURL=user.photoURL||'https://ui-avatars.com/api/?name='+(user.displayName||'U')+'&background=random';
        document.getElementById('nav-profile-pic').src=photoURL;
        document.getElementById('dropdown-profile-pic').src=photoURL;
        document.getElementById('user-email').textContent=user.email;
        const firstName=user.displayName?user.displayName.split(' ')[0]:'USER';
        document.getElementById('user-greeting').textContent=`Hi, ${firstName}!`;
        updateBrandText(firstName);
        
        const userDocRef = db.collection("users").doc(user.uid);
        userDocRef.get().then(docSnap => {
            let data = {
                name: user.displayName || 'Anonymous Aspirant',
                photoURL: photoURL,
                email: user.email
            };
            if (!docSnap.exists) {
                data.questionsSolved = 0; 
            }
            userDocRef.set(data, { merge: true });
        });
        
    }else{
        loginBtn.style.display='flex';
        profileWrapper.style.display='none';
        dropdown.classList.remove('show');
        updateBrandText("U2");
    }
});

function signInWithGoogle(){const provider=new firebase.auth.GoogleAuthProvider();auth.signInWithPopup(provider).catch(err=>{console.error("Auth Error:",err);alert("Login Failed: "+err.message);});}
function signOutUser(){auth.signOut().then(()=>{dropdown.classList.remove('show');}).catch(err=>console.error("Sign Out Error:",err));}
function toggleDropdown(){dropdown.classList.toggle('show');}
document.addEventListener('click',function(event){if(profileWrapper.style.display==='block'){const isClickInside=profileWrapper.contains(event.target);if(!isClickInside&&dropdown.classList.contains('show')){dropdown.classList.remove('show');}}});

// --- 4. UI LOGIC (Tabs, Themes, Sidebar Navigation, LocalStorage Persistence) ---
function switchTab(tabId){
    localStorage.setItem('activeTab', tabId);

    document.querySelectorAll('.tab-content').forEach(tab=>tab.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(btn=>btn.classList.remove('active'));
    
    let activeTab = document.getElementById(tabId);
    if(activeTab) activeTab.classList.add('active');
    
    let btnTab = document.getElementById('btn-tab-' + tabId);
    if(btnTab) btnTab.classList.add('active');
    
    const searchBar = document.getElementById('search-input');
    const hamburger = document.getElementById('mobile-menu-btn');
    
    if(tabId==='practice'){
        searchBar.style.display='block';
        if(hamburger) hamburger.classList.add('active-tab'); // Show hamburger on mobile
    }
    else{
        searchBar.style.display='none';
        if(hamburger) hamburger.classList.remove('active-tab'); // Hide hamburger on mobile
    }
}

// Hamburger Drawer Logic Strictly for Mobile
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    if (!sidebar || !overlay) return;

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        setTimeout(() => overlay.style.display = 'none', 400);
    } else {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        setTimeout(() => overlay.classList.add('show'), 10);
    }
}

function toggleTheme(){const body=document.body,themeBtn=document.getElementById('theme-toggle');body.classList.toggle('light-mode');if(body.classList.contains('light-mode')){themeBtn.textContent='☼';}else{themeBtn.textContent='☾';}}
function togglePanel(){document.getElementById('info-panel').classList.toggle('open');}
function filterChapters(){let input=document.getElementById('search-input').value.toLowerCase(),listItems=document.querySelectorAll('.chapter-list li');listItems.forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(input)?"":"none";});}

function loadExercises(chapterName,element){
    document.querySelectorAll('.chapter-list li').forEach(el=>el.classList.remove('selected'));
    element.classList.add('selected');
    const defaultMsg = document.getElementById('default-msg');
    if(defaultMsg) defaultMsg.style.display='none';
    document.querySelectorAll('.chapter-content').forEach(el=>el.style.display='none');
    let safeId='ch-'+chapterName.replace(/\s+/g,'').replace(/&/g,'and');
    let activeCh=document.getElementById(safeId);
    if(activeCh) activeCh.style.display='block';

    // Auto-close Drawer on Mobile when a chapter is selected
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleMobileSidebar();
        }
    }
}

// --- 5. PRACTICE MODE DYNAMIC SCRIPT INTEGRATION & CLOUD SYNC LOGIC ---
let exData={ex:"",ch:"",id:""},cIdx=0,tmr=null;
let qData=[];
const sampleQuestions=[{id:1,t:'Fallback Question: Test loaded without external script.',o:["A","B","C","D"],c:0,s:"This is a sample because the specific JS file was not linked yet.", type:"single"}];

function loadTestScript(chapter, exName, scriptSrc) {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("You must Sign In with Google before starting a practice test! This ensures your marks and global leaderboard rank are saved permanently.");
        signInWithGoogle();
        return; 
    }

    window.customQData = null; 
    let script = document.createElement('script');
    script.src = scriptSrc + '?t=' + new Date().getTime(); 
    script.onload = () => { openTestEnvironment(chapter, exName); };
    script.onerror = () => { 
        console.warn('Script ' + scriptSrc + ' not found or missing. Launching with fallback data.'); 
        openTestEnvironment(chapter, exName); 
    };
    document.body.appendChild(script);
}

async function openTestEnvironment(chapter,exercise){
    document.getElementById('mock-test-environment').style.display='flex';
    exData={ex:exercise,ch:chapter,id:(chapter.replace(/\s+/g,'_')+'_'+exercise.replace(/[:\s]+/g,'_'))};
    document.getElementById("d-ex").innerText=exData.ex;
    document.getElementById("d-ch").innerText=exData.ch;
    const user=firebase.auth().currentUser;
    let uName="Guest",uIni="G";
    if(user&&user.displayName){uName=user.displayName;uIni=uName.charAt(0).toUpperCase();}
    document.getElementById("u-name").innerText=uName;
    document.getElementById("u-ini").innerText=uIni;
    
    if(window.customQData && window.customQData.length > 0) {
        qData = JSON.parse(JSON.stringify(window.customQData));
    } else {
        qData = JSON.parse(JSON.stringify(sampleQuestions));
    }
    
    await loadP(); 
    renPal();loadQ(0);updateMarksDisplay();
}

function saveP(){
    const dataStr = JSON.stringify(qData.map(q=>({st:q.st||"not-visited",so:q.so??null,l:q.l||0,ts:q.ts||0,r:q.r||0})));
    localStorage.setItem(exData.id, dataStr);
    
    const user = firebase.auth().currentUser;
    if(user) {
        db.collection("users").doc(user.uid).collection("progress").doc(exData.id).set({ data: dataStr });
    }
}

async function loadP(){
    const user = firebase.auth().currentUser;
    let d = localStorage.getItem(exData.id);
    
    if(user) {
        try {
            const docSnap = await db.collection("users").doc(user.uid).collection("progress").doc(exData.id).get();
            if(docSnap.exists) {
                d = docSnap.data().data;
                localStorage.setItem(exData.id, d); 
            }
        } catch(e) { console.error("Cloud sync failed, using local.", e); }
    }

    qData=d?qData.map((q,i)=>{let p=JSON.parse(d)[i];return{...q,st:p?.st||"not-visited",so:p?.so??null,l:p?.l||0,ts:p?.ts||0,r:p?.r||0}}):qData.map(q=>({...q,st:"not-visited",so:null,l:0,ts:0,r:0}));
}

function startT(){clearInterval(tmr);let s=qData[cIdx].ts||0;updT(s);if(!qData[cIdx].l){tmr=setInterval(()=>{qData[cIdx].ts=++s;updT(s);if(s%5==0)saveP();},1000);}}
function updT(s){document.getElementById("q-time").innerText=String(Math.floor(s/60)).padStart(2,'0')+":"+String(s%60).padStart(2,'0');}

function toggleReview() {
    if(cIdx < 0 || cIdx >= qData.length) return;
    qData[cIdx].r = document.getElementById("chk-review").checked ? 1 : 0;
    saveP();
    updPal();
}

function loadQ(i){
    cIdx=i;let q=qData[i];
    if(q.st==="not-visited"){q.st="not-answered";saveP();}
    document.getElementById("q-num").innerText=`Q ${i+1} / ${qData.length}`;
    document.getElementById("chk-review").checked = !!qData[cIdx].r;
    startT();renQ();updPal();
}


// --- 6. FLIPBOOK SOLUTION PANEL LOGIC ---
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

let pageFlipObject = null;
let isBookLoaded = false;
let currentLoadedPdf = "";
let fbScale = 1, fbPosX = 0, fbPosY = 0, fbStartX, fbStartY, fbStartDistance;

async function openSolutionPanel() {
    document.getElementById('solution-panel').classList.add('open');
    
    let pdfFilename = chapterPdfLinks[exData.ch];
    if(!pdfFilename) {
        alert("Solution for this chapter is not uploaded yet.");
        return;
    }
    
    let pdfUrl = PDF_BASE_URL + pdfFilename;

    if (currentLoadedPdf === pdfUrl && isBookLoaded && document.getElementById('book-wrapper').innerHTML !== '') {
        return; 
    }

    isBookLoaded = false;
    currentLoadedPdf = pdfUrl;
    fbScale = 1; updateFbTransform();
    
    if(pageFlipObject) { 
        pageFlipObject.destroy(); 
        pageFlipObject = null; 
    }
    
    const wrapper = document.getElementById('book-wrapper');
    const loader = document.getElementById('loader-wrapper');
    const controls = document.getElementById('zoom-controls');
    
    wrapper.innerHTML = '';
    loader.style.display = 'flex';
    wrapper.style.display = 'none';
    controls.style.display = 'none';
    document.getElementById('nav-prev').style.display = 'none';
    document.getElementById('nav-next').style.display = 'none';

    try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        const renderPromises = [];
        let renderCount = Math.min(pdf.numPages, 40); 
        for (let i = 1; i <= renderCount; i++) {
            renderPromises.push(renderPageToHTML(pdf, i));
        }
        
        const pageElements = await Promise.all(renderPromises);
        pageElements.forEach(pageEl => wrapper.appendChild(pageEl));

        pageFlipObject = new St.PageFlip(wrapper, {
            width: 450, height: 600, size: "stretch",
            minWidth: 300, maxWidth: 600, minHeight: 400, maxHeight: 800,
            drawShadow: true, showCover: true, usePortrait: true, 
            mobileScrollSupport: false,
            useMouseEvents: false 
        });
        pageFlipObject.loadFromHTML(document.querySelectorAll('.fb-page'));

        loader.style.display = 'none';
        wrapper.style.display = 'block';
        controls.style.display = 'flex';
        document.getElementById('nav-prev').style.display = 'block';
        document.getElementById('nav-next').style.display = 'block';
        
        isBookLoaded = true;
        initFbTouchLogic();
    } catch (error) {
        console.error(error);
        loader.innerHTML = `<div style="color: #ef4444; font-weight:bold; margin-top:30px; font-size:1.2rem;">Failed to load PDF. Check link or connection.</div>`;
    }
}

async function renderPageToHTML(pdfDoc, pageNumber) {
    const page = await pdfDoc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.5 });
    const pageDiv = document.createElement('div');
    pageDiv.className = 'fb-page';
    const canvas = document.createElement('canvas');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
    pageDiv.appendChild(canvas);
    return pageDiv;
}

function updateFbTransform() {
    const wrapper = document.getElementById('book-wrapper');
    if (fbScale === 1) { 
        fbPosX = 0; fbPosY = 0; 
    } else {
        const maxPanX = (window.innerWidth * fbScale); 
        const maxPanY = (window.innerHeight * fbScale);
        fbPosX = Math.max(-maxPanX, Math.min(fbPosX, maxPanX));
        fbPosY = Math.max(-maxPanY, Math.min(fbPosY, maxPanY));
    }
    wrapper.style.transform = `translate(${fbPosX}px, ${fbPosY}px) scale(${fbScale})`;
    document.getElementById('zoom-level-text').innerText = `${Math.round(fbScale * 100)}%`;
}

function initFbTouchLogic() {
    const zoomContainer = document.getElementById('zoom-container');
    let isDragging = false;
    
    zoomContainer.addEventListener('mousedown', (e) => {
        if (fbScale > 1) {
            isDragging = true;
            fbStartX = e.clientX - fbPosX;
            fbStartY = e.clientY - fbPosY;
            zoomContainer.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        zoomContainer.style.cursor = 'default';
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging && fbScale > 1) {
            e.preventDefault();
            fbPosX = e.clientX - fbStartX;
            fbPosY = e.clientY - fbStartY;
            updateFbTransform();
        }
    });

    zoomContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length >= 2) {
            e.preventDefault(); 
            fbStartDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        } else if (e.touches.length === 1 && fbScale > 1) {
            fbStartX = e.touches[0].clientX - fbPosX;
            fbStartY = e.touches[0].clientY - fbPosY;
        }
    }, { passive: false });

    zoomContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length >= 2) {
            e.preventDefault();
            let currentDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
            let zoomRatio = currentDist / fbStartDistance;
            fbScale = Math.max(1, Math.min(fbScale * zoomRatio, 5)); 
            fbStartDistance = currentDist;
            updateFbTransform();
        } else if (e.touches.length === 1 && fbScale > 1) {
            e.preventDefault();
            fbPosX = e.touches[0].clientX - fbStartX;
            fbPosY = e.touches[0].clientY - fbStartY;
            updateFbTransform();
        }
    }, { passive: false });
}

function closeSolutionPanel() {
    document.getElementById('solution-panel').classList.remove('open');
}

// --- ROBUST GLOBAL EXERCISE TYPE DETECTION ---
function getQType(q) {
    if (q.type) return q.type;
    if (!exData || !exData.ex) return 'single';
    let ex = exData.ex.toLowerCase();
    
    if (ex.includes("more than one") || ex.includes("exercise-2")) return 'multi';
    if (ex.includes("comprehension") || ex.includes("exercise-3")) return 'single'; 
    if (ex.includes("matching") || ex.includes("exercise-4")) return 'match';
    if (ex.includes("subjective") || ex.includes("exercise-5")) return 'numeric';
    
    return 'single';
}

// --- DYNAMIC RENDERING FOR ALL 4 QUESTION TYPES ---
function renQ(){
    let q=qData[cIdx], l=q.l?"locked":"";
    let type = getQType(q); 
    
    document.getElementById("btn-chk").disabled=q.l;
    document.getElementById("btn-chk").innerText=q.l?"Checked":"Check Answer";
    
    let h=`<div><h3 style="margin-bottom:15px;line-height:1.6; font-size:1.2rem; -webkit-user-select: text; user-select: text; font-weight:600;">${q.t}</h3></div><div style="margin-top:25px;display:flex;flex-direction:column;gap:15px">`;
    
    if (type === 'single') {
        q.o.forEach((o,i)=>{
            let cClass = "";
            let isSel = (q.so===i);
            
            if(q.l){
                let isCor = (i===q.c);
                if(isCor) cClass = "correct-anim";
                else if(isSel && !isCor) cClass = "incorrect-anim";
            } else if(isSel) {
                cClass = "selected";
            }
            
            let bg = q.l ? (cClass==='correct-anim'?'rgba(16,185,129,0.15)':(cClass==='incorrect-anim'?'rgba(239,68,68,0.15)':'rgba(255,255,255,0.02)')) : (isSel?'rgba(59,130,246,0.15)':'rgba(255,255,255,0.03)');
            let border = q.l ? (cClass==='correct-anim'?'#10b981':(cClass==='incorrect-anim'?'#ef4444':'rgba(255,255,255,0.1)')) : (isSel?'#3b82f6':'rgba(255,255,255,0.1)');
            
            h+=`<label class="option-label ${cClass} ${l}" style="display:flex; align-items:center; cursor:${q.l?'default':'pointer'}; padding:16px 20px; border:2px solid ${border}; border-radius:12px; background:${bg}; font-weight:500; color:#f8fafc; transition:all 0.3s ease; box-shadow: ${isSel && !q.l ? '0 4px 15px rgba(59,130,246,0.2)' : 'none'};" onclick="if(!${q.l}) selO(${i})">
                <input type="radio" name="o" ${q.so===i?"checked":""} ${q.l?"disabled":""} style="pointer-events:none; display:none;">
                <span style="color:${isSel||q.l?'#ffffff':'#94a3b8'}; font-weight:700; margin-right:20px; font-size:16px; background:${isSel&&!q.l?'#3b82f6':(cClass==='correct-anim'?'#10b981':(cClass==='incorrect-anim'?'#ef4444':'rgba(255,255,255,0.1)'))}; padding:6px 14px; border-radius:8px; transition:all 0.3s;">${String.fromCharCode(65+i)}</span>
                <span style="font-size:1.05rem; line-height:1.5;">${o}</span>
            </label>`;
        });
    } 
    else if (type === 'multi') {
        let soArr = Array.isArray(q.so) ? q.so : [];
        q.o.forEach((o,i)=>{
            let cClass = "";
            let isSel = soArr.includes(i);
            
            if(q.l){
                let isCor = Array.isArray(q.c) && q.c.includes(i);
                if(isCor) cClass = "correct-anim";
                else if(isSel && !isCor) cClass = "incorrect-anim";
            } else if(isSel) {
                cClass = "selected";
            }
            
            let bg = q.l ? (cClass==='correct-anim'?'rgba(16,185,129,0.15)':(cClass==='incorrect-anim'?'rgba(239,68,68,0.15)':'rgba(255,255,255,0.02)')) : (isSel?'rgba(59,130,246,0.15)':'rgba(255,255,255,0.03)');
            let border = q.l ? (cClass==='correct-anim'?'#10b981':(cClass==='incorrect-anim'?'#ef4444':'rgba(255,255,255,0.1)')) : (isSel?'#3b82f6':'rgba(255,255,255,0.1)');
            
            h+=`<label class="option-label ${l}" style="display:flex; align-items:center; cursor:${q.l?'default':'pointer'}; padding:16px 20px; border:2px solid ${border}; border-radius:12px; background:${bg}; font-weight:500; color:#f8fafc; transition:all 0.3s ease; box-shadow: ${isSel && !q.l ? '0 4px 15px rgba(59,130,246,0.2)' : 'none'};">
                <input type="checkbox" name="q-multi-opt" value="${i}" ${isSel?"checked":""} ${q.l?"disabled":""} onchange="handleMultiChange(this, ${i})" style="margin-right:20px; width:22px; height:22px; cursor:pointer; accent-color:#3b82f6; border-radius:6px;">
                <span style="color:${isSel||q.l?'#ffffff':'#94a3b8'}; font-weight:700; margin-right:20px; font-size:16px; background:${isSel&&!q.l?'#3b82f6':(cClass==='correct-anim'?'#10b981':(cClass==='incorrect-anim'?'#ef4444':'rgba(255,255,255,0.1)'))}; padding:6px 14px; border-radius:8px; transition:all 0.3s;">${String.fromCharCode(65+i)}</span>
                <span style="font-size:1.05rem; line-height:1.5;">${o}</span>
            </label>`;
        });
        h+=`<div id="error-message" style="display:none; color:#ef4444; margin-top:15px; font-size:14px; font-weight:600; padding:12px; background:rgba(239,68,68,0.1); border-radius:8px; border:1px solid rgba(239,68,68,0.3);"><svg style="width:16px; height:16px; display:inline; margin-right:5px; vertical-align:middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>Please select at least one option before checking!</div>`;
    } 
    else if (type === 'match' || type === 'numeric') {
        let val = q.so || "";
        let imode = type === 'numeric' ? 'inputmode="numeric"' : '';
        let placeholder = type === 'match' ? 'Type sequence (e.g., PQRS)' : 'Enter numerical answer';
        let bc = "rgba(255,255,255,0.1)", bg = "rgba(255,255,255,0.03)";
        if (q.l) {
            let isCor = false;
            if(type === 'match') isCor = String(q.so||"").trim().toUpperCase() === String(q.c||"").trim().toUpperCase();
            else isCor = String(q.so||"").trim() === String(q.c||"").trim();
            bc = isCor ? "#10b981" : "#ef4444";
            bg = isCor ? "rgba(16,185,129,.15)" : "rgba(239,68,68,.15)";
        } else if (val) {
            bc = "#3b82f6"; bg = "rgba(59,130,246,.15)";
        }
        let inst = type === 'match' ? '<div style="font-size:13px; color:#f59e0b; margin-bottom:10px; font-weight:600;">Instruction: Type answer in sequence (e.g., PQRS)</div>' : '';
        h += `${inst}<input type="text" ${imode} value="${String(val).replace(/"/g, '&quot;')}" oninput="selTxt(this.value)" ${q.l ? "disabled" : ""} style="width:100%; padding:20px; border:2px solid ${bc}; border-radius:12px; background:${bg}; color:#fff; font-size:1.1rem; outline:none; font-weight:700; transition:all 0.3s; -webkit-user-select: text; user-select: text;" placeholder="${placeholder}">`;
    }
    
    let correctDisplay = "";
    if(type === 'single') correctDisplay = `Option ${String.fromCharCode(65+q.c)}`;
    else if(type === 'multi' && Array.isArray(q.c)) correctDisplay = `Options ${q.c.map(x=>String.fromCharCode(65+x)).join(', ')}`;
    else correctDisplay = `${q.c}`;
    
    let correctHTML = `<div style="font-weight:800;color:#10b981;margin-bottom:15px;font-size:1.1rem; display:flex; align-items:center; gap:8px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Correct Answer: ${correctDisplay}</div>`;
    
    h+=`</div>
        <div class="solution-container" style="display:${q.l?"block":"none"}">
            ${correctHTML}
            <button class="btn btn-outline" style="margin-top: 10px; padding: 10px 25px; font-weight: 700; border: 2px solid #3b82f6; color: #60a5fa; background: rgba(59,130,246,0.1); cursor: pointer; border-radius: 8px; transition: all 0.3s;" onmouseover="this.style.background='rgba(59, 130, 246, 0.2)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(59, 130, 246, 0.1)'; this.style.transform='none';" onclick="openSolutionPanel()">View Detailed Solution</button>
        </div>`;
    document.getElementById("q-area").innerHTML=h;
}

// --- DYNAMIC INPUT HANDLERS ---
function selO(i){
    if(qData[cIdx].l)return;
    qData[cIdx].so=i;
    qData[cIdx].st="not-answered";
    saveP();renQ();
}

window.handleMultiChange = function(cb, i) {
    if(qData[cIdx].l) return;
    let arr = Array.isArray(qData[cIdx].so) ? [...qData[cIdx].so] : [];
    
    if (cb.checked) {
        if (!arr.includes(i)) arr.push(i);
    } else {
        arr = arr.filter(x => x !== i);
    }
    
    qData[cIdx].so = arr;
    qData[cIdx].st = "not-answered";
    let err = document.getElementById('error-message');
    if(err) err.style.display = 'none';
    
    saveP();
    
    let lbl = cb.parentElement;
    let span = lbl.querySelector('span');
    if(cb.checked) {
        lbl.style.borderColor = '#3b82f6';
        lbl.style.background = 'rgba(59,130,246,0.15)';
        lbl.style.boxShadow = '0 4px 15px rgba(59,130,246,0.2)';
        if(span) { span.style.background = '#3b82f6'; span.style.color = '#ffffff'; }
    } else {
        lbl.style.borderColor = 'rgba(255,255,255,0.1)';
        lbl.style.background = 'rgba(255,255,255,0.03)';
        lbl.style.boxShadow = 'none';
        if(span) { span.style.background = 'rgba(255,255,255,0.1)'; span.style.color = '#94a3b8'; }
    }
};

function selTxt(v){
    if(qData[cIdx].l)return;
    qData[cIdx].so = v;
    qData[cIdx].st = "not-answered";
    saveP();
    let el = document.querySelector("#q-area input[type='text']");
    if(el && v.trim() !== "") {
        el.style.borderColor = "#3b82f6";
        el.style.background = "rgba(59,130,246,.15)";
    } else if (el) {
        el.style.borderColor = "rgba(255,255,255,0.1)";
        el.style.background = "rgba(255,255,255,0.03)";
    }
}

// --- EX2 BUG FIX: RELY PURELY ON LIVE q.so DATA ---
function chkAns(){
    let q=qData[cIdx];
    let type = getQType(q); 
    
    if (q.l) return; 

    if (type === 'single' && q.so === null) return alert("Select an option!");
    if (type === 'multi' && (!Array.isArray(q.so) || q.so.length === 0)) {
        let err = document.getElementById("error-message");
        if (err) err.style.display = 'block';
        else alert("Select at least one option!");
        return;
    }
    if ((type === 'match' || type === 'numeric') && (!q.so || String(q.so).trim() === "")) return alert("Enter an answer!");
    
    q.l=1;
    clearInterval(tmr);
    
    let isCor = false;
    try {
        if (type === 'single') isCor = (q.so === q.c);
        else if (type === 'multi') {
            let soSort = [...(q.so||[])].sort();
            let cSort = [...(q.c||[])].sort();
            isCor = JSON.stringify(soSort) === JSON.stringify(cSort);
        }
        else if (type === 'match') isCor = String(q.so||"").trim().toUpperCase() === String(q.c||"").trim().toUpperCase();
        else if (type === 'numeric') isCor = String(q.so||"").trim() === String(q.c||"").trim();
    } catch(e) {
        console.warn("Evaluation Error", e);
        isCor = false;
    }
    
    q.st = isCor ? "correct" : "incorrect";

    const user = firebase.auth().currentUser;
    if (user && db) {
        db.collection("users").doc(user.uid).set({
            questionsSolved: firebase.firestore.FieldValue.increment(1),
            name: user.displayName || 'Anonymous Aspirant',
            photoURL: user.photoURL || ''
        }, { merge: true }).catch(err => console.error("Leaderboard Sync Error:", err));
    }
    
    saveP();
    renQ(); 
    updPal();
    updateMarksDisplay();
    
    setTimeout(()=>{
        const solutionCont=document.querySelector(".solution-container");
        if(solutionCont)solutionCont.scrollIntoView({behavior:"smooth", block:"center"});
    },150);
}

function updateMarksDisplay(){
    let correct=0,totalAttempted=0;
    qData.forEach(q=>{
        if(q.l){
            totalAttempted++;
            let type = getQType(q);
            let isCor = false;
            try {
                if (type === 'single') isCor = (q.so === q.c);
                else if (type === 'multi') isCor = JSON.stringify([...(q.so||[])].sort()) === JSON.stringify([...(q.c||[])].sort());
                else if (type === 'match') isCor = String(q.so||"").trim().toUpperCase() === String(q.c||"").trim().toUpperCase();
                else if (type === 'numeric') isCor = String(q.so||"").trim() === String(q.c||"").trim();
            } catch(e) {}
            if(isCor) correct++;
        }
    });
    document.getElementById("d-marks").innerText=`Marks: ${correct*4} | Preview: ${correct}/${qData.length} Correct`;
}

function nav(d){let n=cIdx+d;if(n>=0&&n<qData.length)loadQ(n);}

function renPal(){
    let p=document.getElementById("pal");p.innerHTML="";
    qData.forEach((q,i)=>{
        let b=document.createElement("div");
        let activeCls = q.r ? "review" : q.st; 
        b.className=`status-bubble ${activeCls}`;
        b.innerText=i+1;
        b.onclick=()=>loadQ(i);
        p.appendChild(b);
    });
    updC();
}

function updPal(){
    let b=document.getElementById("pal").children;
    qData.forEach((q,i)=>{
        let activeCls = q.r ? "review" : q.st;
        b[i].className=`status-bubble ${activeCls}`;
        if(i===cIdx){b[i].classList.add("current-q");}
    });
    updC();
}

function updC(){
    let c={"not-visited":0,"not-answered":0,correct:0,incorrect:0,review:0};
    qData.forEach(q=>{
        if(q.r){ c.review++; }
        if(c[q.st] !== undefined) { c[q.st]++; }
    });
    document.getElementById("c-nv").innerText=c["not-visited"];
    document.getElementById("c-na").innerText=c["not-answered"];
    document.getElementById("c-cor").innerText=c.correct;
    document.getElementById("c-inc").innerText=c.incorrect;
    document.getElementById("c-rev").innerText=c.review;
}

function closeTest(){
    if(confirm("Are you sure you want to exit the Practice Session?")){
        clearInterval(tmr);
        document.getElementById('mock-test-environment').style.display='none';
        closeSolutionPanel();
    }
}

// --- 6. 3D SPACE ANIMATION INTEGRATION (HOME PAGE ONLY) ---
let threeCamera,threeScene,threeRenderer,threeMaterial,threeMouseX=0,threeMouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2;
function initSpaceAnimation(){const container=document.getElementById('canvas-container');if(!container)return;threeCamera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,5,2000);threeCamera.position.z=500;threeScene=new THREE.Scene();threeScene.fog=new THREE.FogExp2(0x050814,0.0015);const geometry=new THREE.BufferGeometry(),vertices=[],size=2000;for(let i=0;i<20000;i++){const x=(Math.random()*size+Math.random()*size)/2-size/2,y=(Math.random()*size+Math.random()*size)/2-size/2,z=(Math.random()*size+Math.random()*size)/2-size/2;vertices.push(x,y,z);}geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));threeMaterial=new THREE.PointsMaterial({size:2.5,color:0x60a5fa,transparent:true,opacity:0.8,blending:THREE.AdditiveBlending});const particles=new THREE.Points(geometry,threeMaterial);threeScene.add(particles);threeRenderer=new THREE.WebGLRenderer({alpha:true,antialias:true});threeRenderer.setPixelRatio(window.devicePixelRatio);threeRenderer.setSize(window.innerWidth,window.innerHeight);container.appendChild(threeRenderer.domElement);document.addEventListener('pointermove',onPointerMove);window.addEventListener('resize',onWindowResize);}
function onWindowResize(){windowHalfX=window.innerWidth/2;windowHalfY=window.innerHeight/2;threeCamera.aspect=window.innerWidth/window.innerHeight;threeCamera.updateProjectionMatrix();threeRenderer.setSize(window.innerWidth,window.innerHeight);}
function onPointerMove(event){threeMouseX=event.clientX-windowHalfX;threeMouseY=event.clientY-windowHalfY;}
function animateSpace(){requestAnimationFrame(animateSpace);if(document.getElementById('home').classList.contains('active')){renderSpace();}}
function renderSpace(){threeCamera.position.x+=(threeMouseX*2-threeCamera.position.x)*0.03;threeCamera.position.y+=(-threeMouseY*2-threeCamera.position.y)*0.03;threeCamera.lookAt(threeScene.position);threeRenderer.render(threeScene,threeCamera);threeScene.rotation.x+=0.0005;threeScene.rotation.y+=0.001;}

// --- INITIALIZATION ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    const savedTab = localStorage.getItem('activeTab') || 'home';
    switchTab(savedTab);

    loopTypewriter();
    initSpaceAnimation();
    animateSpace();
    initLiveLeaderboard(); 
});

window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.visibility = 'hidden';
            preloader.style.display = 'none';
        }, 500); 
    }, 1200); 
});
