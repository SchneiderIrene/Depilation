import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "components/Button/Button"; 
import { CookieBox, TextP, ButtonBox, SettingsLink, StyledLink, CookieOverlay } from "./styles";
import Modal from "components/Modal/Modal";
import { ModalContentBox, StyledInput, StyledLabel, TextBox, TextModel } from "components/Modal/styles";


type ConsentType = "accepted" | "declined" | "analytics-only" | "custom" | null;
localStorage.removeItem("cookieConsent")
function Cookie() {
  const { t } = useTranslation();

  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
const [position, setPosition] = useState({ top: window.innerHeight * 0.3, left: window.innerWidth / 2 });

    const [_consentStatus, setConsentStatus] = useState<ConsentType>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

    const [visible, setVisible] = useState(false);

 useEffect(() => {
    const stored = localStorage.getItem("cookieConsent") as ConsentType;
    if (stored) {
      setConsentStatus(stored);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

   const loadGoogleTagManager = (withAds: boolean) => {
    if (document.getElementById("gtag-script")) return;

    const script = document.createElement("script");
    script.id = "gtag-script";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-6JBQCQWHSC";
    document.head.appendChild(script);

    script.onload = () => {
      const win = window as typeof window & { dataLayer: any[]; gtag: (...args: any[]) => void };
      win.dataLayer = win.dataLayer || [];
      win.gtag = function (...args) {
        win.dataLayer.push(args);
      };
      win.gtag("js", new Date());

      win.gtag("consent", "update", {
        ad_storage: withAds ? "granted" : "denied",
        analytics_storage: "granted",
        ad_user_data: withAds ? "granted" : "denied",
        ad_personalization: withAds ? "granted" : "denied",
      });

      win.gtag("config", "G-6JBQCQWHSC", {
        allow_google_signals: withAds,
        allow_ad_personalization_signals: withAds,
      });
    };
  };


  const saveConsent = (type: ConsentType, withAds = false) => {
    localStorage.setItem("cookieConsent", type!);
    setConsentStatus(type);
    setVisible(false);
    if (type !== "declined") loadGoogleTagManager(withAds);
  };

  const handleAcceptAll = () => saveConsent("accepted", true);
  const handleDeclineAll = () => saveConsent("declined");
  const handleAcceptAnalyticsOnly = () => saveConsent("analytics-only", false);

  const handleOpenSettings = () => {
    // Загружаем текущие настройки из localStorage
    const stored = localStorage.getItem("cookieConsent");
    if (stored) {
      setCookieSettings({
        essential: true,
        analytics: stored === "analytics-only" || stored === "custom" || stored === "accepted",
        marketing: stored === "custom" || stored === "accepted",
      });
    }
    setSettingsOpen(true);
  };

  const saveSettings = () => {
    const hasAnalyticsOrMarketing = cookieSettings.analytics || cookieSettings.marketing;
    const newConsent: ConsentType = hasAnalyticsOrMarketing ? "custom" : "declined";
    localStorage.setItem("cookieConsent", newConsent);
    if (hasAnalyticsOrMarketing) loadGoogleTagManager(cookieSettings.marketing);
    setConsentStatus(newConsent);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;


  




const onMouseDown = (e: React.MouseEvent) => {
  setDragging(true);
  dragStart.current = {
    x: e.clientX - position.left,
    y: e.clientY - position.top,
  };
};

const onMouseMove = (e: React.MouseEvent) => {
  if (!dragging) return;
  setPosition({
    top: e.clientY - dragStart.current.y,
    left: e.clientX - dragStart.current.x,
  });
};

const onMouseUp = () => setDragging(false);

  return (
    <CookieOverlay>
  <CookieBox onMouseDown={onMouseDown}
  onMouseMove={onMouseMove}
  onMouseUp={onMouseUp}
  style={{ top: position.top, left: position.left, transform: 'translateX(-50%)' }}>
      <TextP>
        
         <StyledLink to="/datenschutz"  rel="noopener noreferrer">Datenschutz</StyledLink>
      </TextP>

      <ButtonBox>
        <Button bgColor
          onButtonClick={handleAcceptAll}
          name={t("cookie.button1")} 
        />
        <Button bgColor
          onButtonClick={handleDeclineAll}
          name={t("cookie.button2")} 
        />
        <Button bgColor
          onButtonClick={handleAcceptAnalyticsOnly}
          name={t("cookie.button3")} 
        />
      </ButtonBox>

   
      <SettingsLink onClick={handleOpenSettings}>
        {t("cookie.settings")}
      </SettingsLink>
      
     <Modal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)}>
<ModalContentBox >
    <TextModel>Cookie-Einstellungen</TextModel>
<TextBox>

  <StyledLabel>
      <StyledInput type="checkbox" checked disabled /> Essential (immer aktiv)
    </StyledLabel>

    <StyledLabel>
      <StyledInput
        type="checkbox"
        checked={cookieSettings.analytics}
        onChange={e => setCookieSettings(prev => ({ ...prev, analytics: e.target.checked }))}
      /> Statistik / Analytics
    </StyledLabel>

    <StyledLabel>
      <StyledInput
        type="checkbox"
        checked={cookieSettings.marketing}
        onChange={e => setCookieSettings(prev => ({ ...prev, marketing: e.target.checked }))}
      /> Marketing
    </StyledLabel>
</TextBox>
    

    
      <ButtonBox>
        <Button   name={t("cookie.save")} onButtonClick={saveSettings} bgColor/>
      <Button name={t("cookie.cancel")} onButtonClick={() => setSettingsOpen(false)} bgColor/>
      </ButtonBox>
      
      
   
  </ModalContentBox>

     </Modal>
    </CookieBox>    
    </CookieOverlay>
    
  );
}

export default Cookie;

