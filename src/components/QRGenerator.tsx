"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import QRCodeStyling, {
  CornerDotType,
  CornerSquareType,
  DotType,
  ErrorCorrectionLevel,
} from "qr-code-styling";
import { jsPDF } from "jspdf";
import { Download, Upload, RotateCcw, Wand2 } from "lucide-react";
import { buildQRValue, contrastRatio, safeFileName } from "@/lib/qr-utils";
import { QrType, qrTypes } from "@/lib/qr-data";

export default function QRGenerator() {
  const qrRef = useRef<HTMLDivElement | null>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  const [selectedType, setSelectedType] = useState<QrType>("URL");
  const [activeTab, setActiveTab] = useState("Colors");
  const [selectedExport, setSelectedExport] = useState<"png" | "svg" | "pdf">("png");

  const [content, setContent] = useState("");
  const [qrName, setQrName] = useState("monkscanner-qr");

  const [foreground, setForeground] = useState("#111111");
  const [background, setBackground] = useState("#ffffff");
  const [dotType, setDotType] = useState<DotType>("rounded");
  const [cornerSquareType, setCornerSquareType] =
    useState<CornerSquareType>("extra-rounded");
  const [cornerDotType, setCornerDotType] = useState<CornerDotType>("dot");
  const [margin, setMargin] = useState(12);
  const [qrSize, setQrSize] = useState(800);
  const [errorCorrection, setErrorCorrection] =
    useState<ErrorCorrectionLevel>("M");
  const [logoUrl, setLogoUrl] = useState<string>("");

  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiSecurity, setWifiSecurity] = useState("WPA");

  const [email, setEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const [phone, setPhone] = useState("");
  const [smsMessage, setSmsMessage] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const [vName, setVName] = useState("");
  const [vPhone, setVPhone] = useState("");
  const [vEmail, setVEmail] = useState("");
  const [vCompany, setVCompany] = useState("");
  const [vWebsite, setVWebsite] = useState("");

  const selectedMeta = qrTypes.find((item) => item.name === selectedType);

  // A logo covers ~22% of the code, so it needs the highest error correction (H, ~30%) to stay scannable.
  const effectiveErrorCorrection: ErrorCorrectionLevel = logoUrl ? "H" : errorCorrection;

  const contrast = contrastRatio(foreground, background);
  const contrastWarning =
    contrast === null
      ? null
      : contrast < 3
      ? "Colors are too similar. Most phones will not be able to scan this QR code."
      : contrastRatio(foreground, "#ffffff")! > contrastRatio(background, "#ffffff")!
      ? "Light code on a dark background (inverted) does not scan on some phones. Dark on light is safest."
      : null;

  const liveQrValue = useMemo(
    () =>
      buildQRValue({
        selectedType,
        content,
        wifiSsid,
        wifiPassword,
        wifiSecurity,
        email,
        emailSubject,
        emailBody,
        phone,
        smsMessage,
        whatsappMessage,
        vName,
        vPhone,
        vEmail,
        vCompany,
        vWebsite,
      }),
    [
      selectedType,
      content,
      wifiSsid,
      wifiPassword,
      wifiSecurity,
      email,
      emailSubject,
      emailBody,
      phone,
      smsMessage,
      whatsappMessage,
      vName,
      vPhone,
      vEmail,
      vCompany,
      vWebsite,
    ]
  );

  const [generatedQrValue, setGeneratedQrValue] = useState(
    "https://monkscanner.com"
  );

  useEffect(() => {
    setGeneratedQrValue(liveQrValue || "https://monkscanner.com");
  }, [liveQrValue]);

  useEffect(() => {
    if (!qrRef.current) return;

    const container = qrRef.current;
    container.innerHTML = "";

    qrCode.current = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: "svg",
      data: generatedQrValue,
      image: logoUrl || undefined,
      margin,
      qrOptions: {
        errorCorrectionLevel: effectiveErrorCorrection,
      },
      dotsOptions: {
        color: foreground,
        type: dotType,
      },
      backgroundOptions: {
        color: background,
      },
      cornersSquareOptions: {
        color: foreground,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: foreground,
        type: cornerDotType,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 6,
        imageSize: 0.22,
        hideBackgroundDots: true,
      },
    });

    qrCode.current.append(container);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    qrCode.current?.update({
      width: qrSize,
      height: qrSize,
      data: generatedQrValue,
      image: logoUrl || undefined,
      margin,
      qrOptions: {
        errorCorrectionLevel: effectiveErrorCorrection,
      },
      dotsOptions: {
        color: foreground,
        type: dotType,
      },
      backgroundOptions: {
        color: background,
      },
      cornersSquareOptions: {
        color: foreground,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: foreground,
        type: cornerDotType,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 6,
        imageSize: 0.22,
        hideBackgroundDots: true,
      },
    });
  }, [
    generatedQrValue,
    qrSize,
    logoUrl,
    margin,
    effectiveErrorCorrection,
    foreground,
    background,
    dotType,
    cornerSquareType,
    cornerDotType,
  ]);

  function generateQRCode() {
    setGeneratedQrValue(liveQrValue || "https://monkscanner.com");
  }

  function resetGenerator() {
    setSelectedType("URL");
    setActiveTab("Colors");
    setSelectedExport("png");
    setContent("");
    setQrName("monkscanner-qr");

    setForeground("#111111");
    setBackground("#ffffff");
    setDotType("rounded");
    setCornerSquareType("extra-rounded");
    setCornerDotType("dot");
    setMargin(12);
    setQrSize(800);
    setErrorCorrection("M");
    setLogoUrl("");

    setWifiSsid("");
    setWifiPassword("");
    setWifiSecurity("WPA");

    setEmail("");
    setEmailSubject("");
    setEmailBody("");

    setPhone("");
    setSmsMessage("");
    setWhatsappMessage("");

    setVName("");
    setVPhone("");
    setVEmail("");
    setVCompany("");
    setVWebsite("");

    setGeneratedQrValue("https://monkscanner.com");
  }

  const [downloadError, setDownloadError] = useState("");
  const [downloading, setDownloading] = useState(false);

  // Save a Blob as a file. Blob URLs are more reliable than long data: URLs
  // (Brave, Safari/iOS and some Chromium builds block or ignore those).
  function saveBlob(blob: Blob, fileName: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Revoke later so the browser has time to start the download
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  async function getQrBlob(extension: "png" | "svg") {
    // Build a fresh QR from the current settings for every download.
    // qr-code-styling caches its PNG canvas after the first export and does not
    // refresh it on update(), which made later downloads repeat an old QR.
    const exporter = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: extension === "svg" ? "svg" : "canvas",
      data: liveQrValue || generatedQrValue,
      image: logoUrl || undefined,
      margin,
      qrOptions: {
        errorCorrectionLevel: effectiveErrorCorrection,
      },
      dotsOptions: {
        color: foreground,
        type: dotType,
      },
      backgroundOptions: {
        color: background,
      },
      cornersSquareOptions: {
        color: foreground,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: foreground,
        type: cornerDotType,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 6,
        imageSize: 0.22,
        hideBackgroundDots: true,
      },
    });
    const raw = await exporter.getRawData(extension);
    if (!raw) throw new Error("Could not render the QR code");
    return raw as Blob;
  }

  async function downloadPNG() {
    saveBlob(await getQrBlob("png"), `${safeFileName(qrName)}.png`);
  }

  async function downloadSVG() {
    saveBlob(await getQrBlob("svg"), `${safeFileName(qrName)}.svg`);
  }

  async function downloadPDF() {
    const blob = await getQrBlob("png");
    const imageUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    pdf.setFontSize(18);
    pdf.text(qrName || "MonkScanner QR Code", 105, 25, { align: "center" });
    pdf.addImage(imageUrl, "PNG", 45, 40, 120, 120, undefined, "FAST");
    pdf.setFontSize(10);
    pdf.text("Generated with MonkScanner", 105, 175, { align: "center" });
    saveBlob(pdf.output("blob"), `${safeFileName(qrName)}.pdf`);
  }

  async function handleDownload() {
    setDownloadError("");
    setDownloading(true);
    try {
      if (selectedExport === "png") await downloadPNG();
      if (selectedExport === "svg") await downloadSVG();
      if (selectedExport === "pdf") await downloadPDF();
    } catch (err) {
      console.error("Download failed:", err);
      setDownloadError(
        "Download failed. Please try again, or try another format. If you use Brave, lowering Shields for this site can help."
      );
    } finally {
      setDownloading(false);
    }
  }

  function handleLogoUpload(file?: File) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setLogoUrl(String(reader.result));
    reader.readAsDataURL(file);
  }

  return (
    <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/70 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr_360px]">
        <div>
          <h2 className="mb-4 text-sm font-bold">1. Choose QR Type</h2>

          <div className="max-h-[560px] space-y-2 overflow-y-auto pr-1">
            {qrTypes.map((item) => {
              const Icon = item.icon;
              const active = selectedType === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setSelectedType(item.name);
                    setContent("");
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition ${
                    active
                      ? "border-yellow-300 bg-yellow-50 text-yellow-700"
                      : "border-gray-100 bg-white hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} />
                  <span>
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span className="block text-xs text-gray-500">
                      {item.desc}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-y border-gray-100 py-6 lg:border-x lg:border-y-0 lg:px-6 lg:py-0">
          <h2 className="mb-4 text-sm font-bold">2. Enter Content</h2>

          <label className="mb-2 block text-sm font-medium">QR Code Name</label>
          <input
            value={qrName}
            onChange={(e) => setQrName(e.target.value)}
            placeholder="monkscanner-qr"
            className="mb-5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none ring-yellow-300 focus:ring-2"
          />

          <DynamicFields
            selectedType={selectedType}
            placeholder={selectedMeta?.placeholder}
            content={content}
            setContent={setContent}
            wifiSsid={wifiSsid}
            setWifiSsid={setWifiSsid}
            wifiPassword={wifiPassword}
            setWifiPassword={setWifiPassword}
            wifiSecurity={wifiSecurity}
            setWifiSecurity={setWifiSecurity}
            email={email}
            setEmail={setEmail}
            emailSubject={emailSubject}
            setEmailSubject={setEmailSubject}
            emailBody={emailBody}
            setEmailBody={setEmailBody}
            phone={phone}
            setPhone={setPhone}
            smsMessage={smsMessage}
            setSmsMessage={setSmsMessage}
            whatsappMessage={whatsappMessage}
            setWhatsappMessage={setWhatsappMessage}
            vName={vName}
            setVName={setVName}
            vPhone={vPhone}
            setVPhone={setVPhone}
            vEmail={vEmail}
            setVEmail={setVEmail}
            vCompany={vCompany}
            setVCompany={setVCompany}
            vWebsite={vWebsite}
            setVWebsite={setVWebsite}
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              onClick={generateQRCode}
              className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 font-black text-black transition hover:bg-yellow-300"
            >
              <Wand2 size={18} /> Generate QR Code
            </button>

            <button
              onClick={resetGenerator}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 font-black text-gray-700 transition hover:bg-gray-50"
            >
              <RotateCcw size={18} /> Reset
            </button>
          </div>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
              Generated QR Value
            </p>
            <p className="mt-2 break-all text-xs leading-5 text-gray-600">
              {generatedQrValue}
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-4 text-sm font-bold">3. QR Preview</h2>

            <div className="mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center overflow-hidden rounded-3xl bg-white p-5 shadow-sm">
              <div
                ref={qrRef}
                className="flex h-full w-full items-center justify-center [&_canvas]:!h-full [&_canvas]:!w-full [&_canvas]:max-w-full [&_svg]:!h-full [&_svg]:!w-full [&_svg]:max-w-full"
              />
            </div>

            <p className="mt-3 text-center text-xs text-gray-500">
              Live preview. Export size: {qrSize}px.
            </p>

            {contrastWarning && (
              <p
                role="alert"
                className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-xs font-bold text-red-700"
              >
                {contrastWarning}
              </p>
            )}

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { label: "PNG", value: "png" },
                { label: "SVG", value: "svg" },
                { label: "PDF", value: "pdf" },
              ].map((format) => (
                <button
                  key={format.value}
                  onClick={() =>
                    setSelectedExport(format.value as "png" | "svg" | "pdf")
                  }
                  className={`rounded-xl border py-3 text-sm font-black transition ${
                    selectedExport === format.value
                      ? "border-yellow-400 bg-yellow-400 text-black shadow-sm"
                      : "border-gray-200 bg-white text-gray-700 hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
                  }`}
                >
                  {format.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 font-black text-black transition hover:bg-yellow-300 disabled:cursor-wait disabled:opacity-70"
            >
              <Download size={18} />{" "}
              {downloading ? "Preparing…" : `Download ${selectedExport.toUpperCase()}`}
            </button>

            {downloadError && (
              <p
                role="alert"
                className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-xs font-bold text-red-700"
              >
                {downloadError}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
        <div className="grid grid-cols-3 border-b border-gray-200 md:grid-cols-6">
          {["Colors", "Design", "Logo", "Eyes", "Dots", "Options"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-5 text-sm font-bold ${
                  activeTab === tab ? "bg-yellow-50 text-yellow-700" : "bg-white"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="bg-white p-5">
          {activeTab === "Colors" && (
            <div className="grid gap-6 md:grid-cols-3">
              <ColorInput
                label="Foreground Color"
                value={foreground}
                onChange={setForeground}
              />
              <ColorInput
                label="Background Color"
                value={background}
                onChange={setBackground}
              />
              <QuickColors setForeground={setForeground} />
            </div>
          )}

          {activeTab === "Design" && (
            <div className="grid gap-6 md:grid-cols-3">
              <SelectControl
                label="Dot Style"
                value={dotType}
                onChange={setDotType}
                options={[
                  "square",
                  "dots",
                  "rounded",
                  "extra-rounded",
                  "classy",
                  "classy-rounded",
                ]}
              />
              <RangeControl
                label="Export Size"
                value={qrSize}
                min={300}
                max={2000}
                onChange={setQrSize}
              />
              <RangeControl
                label="Margin"
                value={margin}
                min={8}
                max={40}
                onChange={setMargin}
              />
            </div>
          )}

          {activeTab === "Logo" && (
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-sm font-bold text-gray-600 hover:bg-gray-100">
                <Upload className="mb-2 text-yellow-500" size={24} />
                Choose Logo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleLogoUpload(e.target.files?.[0])}
                />
              </label>

              <div>
                <p className="text-sm font-bold">Logo Status</p>
                <p className="mt-2 text-sm text-gray-500">
                  {logoUrl
                    ? "Logo uploaded. Error correction is set to H automatically so the code stays scannable."
                    : "No logo uploaded yet."}
                </p>

                {logoUrl && (
                  <button
                    onClick={() => setLogoUrl("")}
                    className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600"
                  >
                    Remove Logo
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === "Eyes" && (
            <div className="grid gap-6 md:grid-cols-2">
              <SelectControl
                label="Corner Square Style"
                value={cornerSquareType}
                onChange={setCornerSquareType}
                options={["square", "dot", "extra-rounded"]}
              />
              <SelectControl
                label="Corner Dot Style"
                value={cornerDotType}
                onChange={setCornerDotType}
                options={["square", "dot"]}
              />
            </div>
          )}

          {activeTab === "Dots" && (
            <div className="grid gap-6 md:grid-cols-2">
              <SelectControl
                label="Dot Style"
                value={dotType}
                onChange={setDotType}
                options={[
                  "square",
                  "dots",
                  "rounded",
                  "extra-rounded",
                  "classy",
                  "classy-rounded",
                ]}
              />
              <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
                Dot style changes the internal QR pattern. For small print sizes,
                rounded or square is safer than dots.
              </p>
            </div>
          )}

          {activeTab === "Options" && (
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <SelectControl
                  label="Error Correction"
                  value={effectiveErrorCorrection}
                  onChange={setErrorCorrection}
                  options={["L", "M", "Q", "H"]}
                />
                {logoUrl && (
                  <p className="mt-2 text-xs text-gray-500">
                    Locked to H while a logo is added, so the code still scans.
                  </p>
                )}
              </div>
              <RangeControl
                label="Margin"
                value={margin}
                min={8}
                max={40}
                onChange={setMargin}
              />
              <RangeControl
                label="Export Size"
                value={qrSize}
                min={300}
                max={2000}
                onChange={setQrSize}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

function DynamicFields(props: any) {
  if (props.selectedType === "WiFi") {
    return (
      <div className="space-y-4">
        <Field
          label="WiFi Network Name SSID"
          value={props.wifiSsid}
          setValue={props.setWifiSsid}
          placeholder="Home WiFi / Cafe WiFi"
        />
        <Field
          label="WiFi Password"
          value={props.wifiPassword}
          setValue={props.setWifiPassword}
          placeholder="Enter WiFi password"
        />
        <div>
          <label className="mb-2 block text-sm font-medium">Security</label>
          <select
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none ring-yellow-300 focus:ring-2"
            value={props.wifiSecurity}
            onChange={(e) => props.setWifiSecurity(e.target.value)}
          >
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">No Password</option>
          </select>
        </div>
      </div>
    );
  }

  if (props.selectedType === "Email") {
    return (
      <div className="space-y-4">
        <Field
          label="Email Address"
          value={props.email}
          setValue={props.setEmail}
          placeholder="hello@example.com"
        />
        <Field
          label="Subject"
          value={props.emailSubject}
          setValue={props.setEmailSubject}
          placeholder="Inquiry from QR code"
        />
        <TextArea
          label="Body"
          value={props.emailBody}
          setValue={props.setEmailBody}
          placeholder="Hello, I would like to know more..."
        />
      </div>
    );
  }

  if (props.selectedType === "Phone") {
    return (
      <Field
        label="Phone Number"
        value={props.phone}
        setValue={props.setPhone}
        placeholder="+973 1234 5678"
      />
    );
  }

  if (props.selectedType === "SMS") {
    return (
      <div className="space-y-4">
        <Field
          label="Phone Number"
          value={props.phone}
          setValue={props.setPhone}
          placeholder="+973 1234 5678"
        />
        <TextArea
          label="SMS Message"
          value={props.smsMessage}
          setValue={props.setSmsMessage}
          placeholder="Your SMS message here"
        />
      </div>
    );
  }

  if (props.selectedType === "WhatsApp") {
    return (
      <div className="space-y-4">
        <Field
          label="WhatsApp Number"
          value={props.phone}
          setValue={props.setPhone}
          placeholder="97312345678"
        />
        <TextArea
          label="Message"
          value={props.whatsappMessage}
          setValue={props.setWhatsappMessage}
          placeholder="Hi, I found you from the QR code."
        />
      </div>
    );
  }

  if (props.selectedType === "vCard") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Full Name"
          value={props.vName}
          setValue={props.setVName}
          placeholder="John Smith"
        />
        <Field
          label="Phone"
          value={props.vPhone}
          setValue={props.setVPhone}
          placeholder="+973 1234 5678"
        />
        <Field
          label="Email"
          value={props.vEmail}
          setValue={props.setVEmail}
          placeholder="john@example.com"
        />
        <Field
          label="Company"
          value={props.vCompany}
          setValue={props.setVCompany}
          placeholder="Company LLC"
        />
        <div className="md:col-span-2">
          <Field
            label="Website"
            value={props.vWebsite}
            setValue={props.setVWebsite}
            placeholder="https://example.com"
          />
        </div>
      </div>
    );
  }

  return (
    <Field
      label={`${props.selectedType} ${
        [
          "URL",
          "Menu",
          "MP3",
          "Images",
          "Apps",
          "Instagram",
          "YouTube",
          "Facebook",
        ].includes(props.selectedType)
          ? "URL"
          : "Content"
      }`}
      value={props.content}
      setValue={props.setContent}
      placeholder={props.placeholder || "Enter your URL here..."}
    />
  );
}

function Field({ label, value, setValue, placeholder }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none ring-yellow-300 focus:ring-2"
      />
    </div>
  );
}

function TextArea({ label, value, setValue, placeholder }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none ring-yellow-300 focus:ring-2"
      />
    </div>
  );
}

function ColorInput({ label, value, onChange }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 w-full rounded-xl border border-gray-200"
      />
    </div>
  );
}

function QuickColors({ setForeground }: any) {
  return (
    <div>
      <label className="mb-3 block text-sm font-bold">Quick Colors</label>
      <div className="flex flex-wrap gap-3">
        {[
          "#000000",
          "#ffffff",
          "#ef4444",
          "#22c55e",
          "#3b82f6",
          "#f59e0b",
          "#8b5cf6",
          "#ec4899",
        ].map((color) => (
          <button
            key={color}
            onClick={() => setForeground(color)}
            className="h-9 w-9 rounded-full border border-gray-300"
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

function SelectControl({ label, value, onChange, options }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none ring-yellow-300 focus:ring-2"
      >
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function RangeControl({ label, value, min, max, onChange }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">
        {label}: {value}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}