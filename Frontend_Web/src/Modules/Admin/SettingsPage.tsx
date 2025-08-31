import React, { useState } from 'react';
import { FiSave, FiGlobe, FiMail, FiCreditCard, FiShield, FiUsers, FiBell, } from 'react-icons/fi';
import './settingsPage.scss';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [settings, setSettings] = useState({
        // General Settings
        storeName: 'Furniture Store',
        storeDescription: 'Your one-stop shop for quality furniture',
        storeEmail: 'admin@furniturestore.com',
        storePhone: '+1 (555) 123-4567',
        storeAddress: '123 Furniture Street, Design City, DC 12345',
        timezone: 'UTC-5',
        currency: 'USD',
        language: 'English',

        // Email Settings
        smtpHost: 'smtp.gmail.com',
        smtpPort: '587',
        smtpUsername: 'noreply@furniturestore.com',
        smtpPassword: '',
        emailFrom: 'noreply@furniturestore.com',
        emailReplyTo: 'support@furniturestore.com',

        // Payment Settings
        stripeEnabled: true,
        stripePublishableKey: 'pk_test_...',
        stripeSecretKey: 'sk_test_...',
        paypalEnabled: true,
        paypalClientId: 'client_id_...',
        paypalSecret: 'secret_...',

        // Security Settings
        twoFactorEnabled: false,
        sessionTimeout: 30,
        maxLoginAttempts: 5,
        passwordExpiry: 90,

        // User Settings
        userRegistration: true,
        emailVerification: true,
        autoApproveUsers: false,
        defaultUserRole: 'customer',

        // Notification Settings
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        orderNotifications: true,
        inventoryNotifications: true,

        // Appearance Settings
        primaryColor: '#6366f1',
        secondaryColor: '#10b981',
        logo: '/logo.png',
        favicon: '/favicon.ico',
        theme: 'light'
    });

    const handleSettingChange = (key: string, value: any) => {
        setSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSave = () => {
        // Handle saving settings
        console.log('Saving settings:', settings);
        // You can add API call here
    };

    const tabs = [
        { id: 'general', label: 'General', icon: FiGlobe },
        { id: 'email', label: 'Email', icon: FiMail },
        { id: 'payment', label: 'Payment', icon: FiCreditCard },
        { id: 'security', label: 'Security', icon: FiShield },
        { id: 'users', label: 'Users', icon: FiUsers },
        { id: 'notifications', label: 'Notifications', icon: FiBell },
        { id: 'appearance', label: 'Appearance', icon: FiBell }
    ];

    const renderGeneralSettings = () => (
        <div className="settingsSection">
            <h3>Store Information</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label>Store Name</label>
                    <input 
                        type="text" 
                        value={settings.storeName}
                        onChange={(e) => handleSettingChange('storeName', e.target.value)}
                        placeholder="Enter store name"
                    />
                </div>
                <div className="formGroup">
                    <label>Store Description</label>
                    <textarea 
                        value={settings.storeDescription}
                        onChange={(e) => handleSettingChange('storeDescription', e.target.value)}
                        placeholder="Enter store description"
                        rows={3}
                    />
                </div>
                <div className="formGroup">
                    <label>Store Email</label>
                    <input 
                        type="email" 
                        value={settings.storeEmail}
                        onChange={(e) => handleSettingChange('storeEmail', e.target.value)}
                        placeholder="Enter store email"
                    />
                </div>
                <div className="formGroup">
                    <label>Store Phone</label>
                    <input 
                        type="tel" 
                        value={settings.storePhone}
                        onChange={(e) => handleSettingChange('storePhone', e.target.value)}
                        placeholder="Enter store phone"
                    />
                </div>
                <div className="formGroup fullWidth">
                    <label>Store Address</label>
                    <textarea 
                        value={settings.storeAddress}
                        onChange={(e) => handleSettingChange('storeAddress', e.target.value)}
                        placeholder="Enter store address"
                        rows={2}
                    />
                </div>
            </div>

            <h3>Regional Settings</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label>Timezone</label>
                    <select 
                        value={settings.timezone}
                        onChange={(e) => handleSettingChange('timezone', e.target.value)}
                    >
                        <option value="UTC-8">UTC-8 (Pacific)</option>
                        <option value="UTC-5">UTC-5 (Eastern)</option>
                        <option value="UTC+0">UTC+0 (GMT)</option>
                        <option value="UTC+1">UTC+1 (Central European)</option>
                        <option value="UTC+5:30">UTC+5:30 (India)</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label>Currency</label>
                    <select 
                        value={settings.currency}
                        onChange={(e) => handleSettingChange('currency', e.target.value)}
                    >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="INR">INR (₹)</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label>Language</label>
                    <select 
                        value={settings.language}
                        onChange={(e) => handleSettingChange('language', e.target.value)}
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </div>
        </div>
    );

    const renderEmailSettings = () => (
        <div className="settingsSection">
            <h3>SMTP Configuration</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label>SMTP Host</label>
                    <input 
                        type="text" 
                        value={settings.smtpHost}
                        onChange={(e) => handleSettingChange('smtpHost', e.target.value)}
                        placeholder="Enter SMTP host"
                    />
                </div>
                <div className="formGroup">
                    <label>SMTP Port</label>
                    <input 
                        type="number" 
                        value={settings.smtpPort}
                        onChange={(e) => handleSettingChange('smtpPort', e.target.value)}
                        placeholder="Enter SMTP port"
                    />
                </div>
                <div className="formGroup">
                    <label>SMTP Username</label>
                    <input 
                        type="text" 
                        value={settings.smtpUsername}
                        onChange={(e) => handleSettingChange('smtpUsername', e.target.value)}
                        placeholder="Enter SMTP username"
                    />
                </div>
                <div className="formGroup">
                    <label>SMTP Password</label>
                    <input 
                        type="password" 
                        value={settings.smtpPassword}
                        onChange={(e) => handleSettingChange('smtpPassword', e.target.value)}
                        placeholder="Enter SMTP password"
                    />
                </div>
                <div className="formGroup">
                    <label>From Email</label>
                    <input 
                        type="email" 
                        value={settings.emailFrom}
                        onChange={(e) => handleSettingChange('emailFrom', e.target.value)}
                        placeholder="Enter from email"
                    />
                </div>
                <div className="formGroup">
                    <label>Reply To Email</label>
                    <input 
                        type="email" 
                        value={settings.emailReplyTo}
                        onChange={(e) => handleSettingChange('emailReplyTo', e.target.value)}
                        placeholder="Enter reply to email"
                    />
                </div>
            </div>
        </div>
    );

    const renderPaymentSettings = () => (
        <div className="settingsSection">
            <h3>Stripe Configuration</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.stripeEnabled}
                            onChange={(e) => handleSettingChange('stripeEnabled', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Enable Stripe Payments
                    </label>
                </div>
                {settings.stripeEnabled && (
                    <>
                        <div className="formGroup">
                            <label>Publishable Key</label>
                            <input 
                                type="text" 
                                value={settings.stripePublishableKey}
                                onChange={(e) => handleSettingChange('stripePublishableKey', e.target.value)}
                                placeholder="Enter Stripe publishable key"
                            />
                        </div>
                        <div className="formGroup">
                            <label>Secret Key</label>
                            <input 
                                type="password" 
                                value={settings.stripeSecretKey}
                                onChange={(e) => handleSettingChange('stripeSecretKey', e.target.value)}
                                placeholder="Enter Stripe secret key"
                            />
                        </div>
                    </>
                )}
            </div>

            <h3>PayPal Configuration</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.paypalEnabled}
                            onChange={(e) => handleSettingChange('paypalEnabled', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Enable PayPal Payments
                    </label>
                </div>
                {settings.paypalEnabled && (
                    <>
                        <div className="formGroup">
                            <label>Client ID</label>
                            <input 
                                type="text" 
                                value={settings.paypalClientId}
                                onChange={(e) => handleSettingChange('paypalClientId', e.target.value)}
                                placeholder="Enter PayPal client ID"
                            />
                        </div>
                        <div className="formGroup">
                            <label>Secret</label>
                            <input 
                                type="password" 
                                value={settings.paypalSecret}
                                onChange={(e) => handleSettingChange('paypalSecret', e.target.value)}
                                placeholder="Enter PayPal secret"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    const renderSecuritySettings = () => (
        <div className="settingsSection">
            <h3>Authentication & Security</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.twoFactorEnabled}
                            onChange={(e) => handleSettingChange('twoFactorEnabled', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Enable Two-Factor Authentication
                    </label>
                </div>
                <div className="formGroup">
                    <label>Session Timeout (minutes)</label>
                    <input 
                        type="number" 
                        value={settings.sessionTimeout}
                        onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                        min="5"
                        max="480"
                    />
                </div>
                <div className="formGroup">
                    <label>Max Login Attempts</label>
                    <input 
                        type="number" 
                        value={settings.maxLoginAttempts}
                        onChange={(e) => handleSettingChange('maxLoginAttempts', parseInt(e.target.value))}
                        min="3"
                        max="10"
                    />
                </div>
                <div className="formGroup">
                    <label>Password Expiry (days)</label>
                    <input 
                        type="number" 
                        value={settings.passwordExpiry}
                        onChange={(e) => handleSettingChange('passwordExpiry', parseInt(e.target.value))}
                        min="30"
                        max="365"
                    />
                </div>
            </div>
        </div>
    );

    const renderUserSettings = () => (
        <div className="settingsSection">
            <h3>User Management</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.userRegistration}
                            onChange={(e) => handleSettingChange('userRegistration', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Allow User Registration
                    </label>
                </div>
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.emailVerification}
                            onChange={(e) => handleSettingChange('emailVerification', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Require Email Verification
                    </label>
                </div>
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.autoApproveUsers}
                            onChange={(e) => handleSettingChange('autoApproveUsers', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Auto-approve New Users
                    </label>
                </div>
                <div className="formGroup">
                    <label>Default User Role</label>
                    <select 
                        value={settings.defaultUserRole}
                        onChange={(e) => handleSettingChange('defaultUserRole', e.target.value)}
                    >
                        <option value="customer">Customer</option>
                        <option value="vendor">Vendor</option>
                        <option value="moderator">Moderator</option>
                    </select>
                </div>
            </div>
        </div>
    );

    const renderNotificationSettings = () => (
        <div className="settingsSection">
            <h3>Notification Preferences</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.emailNotifications}
                            onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Email Notifications
                    </label>
                </div>
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.smsNotifications}
                            onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        SMS Notifications
                    </label>
                </div>
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.pushNotifications}
                            onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Push Notifications
                    </label>
                </div>
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.orderNotifications}
                            onChange={(e) => handleSettingChange('orderNotifications', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Order Notifications
                    </label>
                </div>
                <div className="formGroup">
                    <label className="checkboxLabel">
                        <input 
                            type="checkbox" 
                            checked={settings.inventoryNotifications}
                            onChange={(e) => handleSettingChange('inventoryNotifications', e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Inventory Notifications
                    </label>
                </div>
            </div>
        </div>
    );

    const renderAppearanceSettings = () => (
        <div className="settingsSection">
            <h3>Theme & Branding</h3>
            <div className="formGrid">
                <div className="formGroup">
                    <label>Primary Color</label>
                    <input 
                        type="color" 
                        value={settings.primaryColor}
                        onChange={(e) => handleSettingChange('primaryColor', e.target.value)}
                    />
                </div>
                <div className="formGroup">
                    <label>Secondary Color</label>
                    <input 
                        type="color" 
                        value={settings.secondaryColor}
                        onChange={(e) => handleSettingChange('secondaryColor', e.target.value)}
                    />
                </div>
                <div className="formGroup">
                    <label>Theme</label>
                    <select 
                        value={settings.theme}
                        onChange={(e) => handleSettingChange('theme', e.target.value)}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="auto">Auto</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label>Logo</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files?.[0]) {
                                handleSettingChange('logo', URL.createObjectURL(e.target.files[0]));
                            }
                        }}
                    />
                </div>
                <div className="formGroup">
                    <label>Favicon</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files?.[0]) {
                                handleSettingChange('favicon', URL.createObjectURL(e.target.files[0]));
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'general':
                return renderGeneralSettings();
            case 'email':
                return renderEmailSettings();
            case 'payment':
                return renderPaymentSettings();
            case 'security':
                return renderSecuritySettings();
            case 'users':
                return renderUserSettings();
            case 'notifications':
                return renderNotificationSettings();
            case 'appearance':
                return renderAppearanceSettings();
            default:
                return renderGeneralSettings();
        }
    };

    return (
        <div className="settingsPage">
            <div className="pageHeader">
                <div className="headerLeft">
                    <h2>Settings</h2>
                    <p>Manage your store configuration and preferences</p>
                </div>
                <div className="headerRight">
                    <button className="saveBtn" onClick={handleSave}>
                        <FiSave className="saveIcon" />
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="settingsContainer">
                <div className="settingsSidebar">
                    <nav className="settingsNav">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`navTab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <tab.icon className="tabIcon" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="settingsContent">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
