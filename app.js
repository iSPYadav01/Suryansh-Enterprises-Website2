// Suryansh Enterprises - Complete Website Application - FIXED VERSION
// Production-ready multi-page website with full functionality

// Application Data and Configuration
const CONFIG = {
    siteName: 'Suryansh Enterprises',
    currentLang: 'en',
    isAdminLoggedIn: false,
    currentPage: 'home',
    applicationCounter: 1000,
    
    // Service data
    services: {
        edistrict: [
            { name_en: 'Birth Certificate', name_hi: 'जन्म प्रमाणपत्र', fee: 50, processing_time: '3-5 days', 
              description_en: 'Official birth certificate issued by government authorities',
              description_hi: 'सरकारी अधिकारियों द्वारा जारी आधिकारिक जन्म प्रमाणपत्र',
              requirements: ['Birth registration number', 'Parent ID proof', 'Address proof'] },
            { name_en: 'Death Certificate', name_hi: 'मृत्यु प्रमाणपत्र', fee: 50, processing_time: '3-5 days',
              description_en: 'Official death certificate for legal and administrative purposes',
              description_hi: 'कानूनी और प्रशासनिक उद्देश्यों के लिए आधिकारिक मृत्यु प्रमाणपत्र',
              requirements: ['Death registration number', 'ID proof of applicant', 'Relationship proof'] },
            { name_en: 'Marriage Certificate', name_hi: 'विवाह प्रमाणपत्र', fee: 100, processing_time: '5-7 days',
              description_en: 'Legal marriage certificate recognized by government',
              description_hi: 'सरकार द्वारा मान्यता प्राप्त कानूनी विवाह प्रमाणपत्र',
              requirements: ['Marriage registration details', 'ID proof of both parties', 'Wedding photographs'] },
            { name_en: 'Caste Certificate', name_hi: 'जाति प्रमाणपत्र', fee: 75, processing_time: '7-10 days',
              description_en: 'Official caste certificate for reservation benefits',
              description_hi: 'आरक्षण लाभों के लिए आधिकारिक जाति प्रमाणपत्र',
              requirements: ['Family tree documents', 'Previous caste certificate', 'Village records'] },
            { name_en: 'Income Certificate', name_hi: 'आय प्रमाणपत्र', fee: 75, processing_time: '7-10 days',
              description_en: 'Official income certificate for various government schemes',
              description_hi: 'विभिन्न सरकारी योजनाओं के लिए आधिकारिक आय प्रमाणपत्र',
              requirements: ['Salary slips', 'Bank statements', 'Employment certificate'] },
            { name_en: 'Domicile Certificate', name_hi: 'निवास प्रमाणपत्र', fee: 75, processing_time: '7-10 days',
              description_en: 'Proof of residence certificate for local benefits',
              description_hi: 'स्थानीय लाभों के लिए निवास प्रमाण प्रमाणपत्र',
              requirements: ['Address proof documents', 'Residence duration proof', 'Local authority verification'] }
        ],
        csc: [
            { name_en: 'New Aadhar Enrollment', name_hi: 'नया आधार नामांकन', fee: 100, processing_time: '15-30 days',
              description_en: 'Fresh Aadhar card enrollment for new applicants',
              description_hi: 'नए आवेदकों के लिए फ्रेश आधार कार्ड नामांकन',
              requirements: ['Birth certificate', 'Address proof', 'Identity proof', 'Photograph'] },
            { name_en: 'Aadhar Update', name_hi: 'आधार अपडेट', fee: 50, processing_time: '7-15 days',
              description_en: 'Update existing Aadhar card information',
              description_hi: 'मौजूदा आधार कार्ड की जानकारी अपडेट करें',
              requirements: ['Original Aadhar card', 'Update documents', 'Photograph (if required)'] },
            { name_en: 'Aadhar Print', name_hi: 'आधार प्रिंट', fee: 20, processing_time: '1 day',
              description_en: 'Print copy of existing Aadhar card',
              description_hi: 'मौजूदा आधार कार्ड की प्रिंट कॉपी',
              requirements: ['Aadhar number', 'Mobile OTP verification', 'Basic identity proof'] },
            { name_en: 'PM Kisan Registration', name_hi: 'पीएम किसान पंजीकरण', fee: 100, processing_time: '10-15 days',
              description_en: 'Registration for PM Kisan Samman Nidhi scheme',
              description_hi: 'पीएम किसान सम्मान निधि योजना के लिए पंजीकरण',
              requirements: ['Aadhar card', 'Land documents', 'Bank details', 'Agricultural records'] },
            { name_en: 'Ayushman Bharat Enrollment', name_hi: 'आयुष्मान भारत नामांकन', fee: 150, processing_time: '15-20 days',
              description_en: 'Health insurance enrollment under Ayushman Bharat scheme',
              description_hi: 'आयुष्मान भारत योजना के तहत स्वास्थ्य बीमा नामांकन',
              requirements: ['Family Aadhar cards', 'Income certificate', 'Ration card', 'Family photographs'] },
            { name_en: 'PM Ujjwala Application', name_hi: 'पीएम उज्ज्वला आवेदन', fee: 100, processing_time: '10-15 days',
              description_en: 'LPG connection under PM Ujjwala Yojana',
              description_hi: 'पीएम उज्ज्वला योजना के तहत एलपीजी कनेक्शन',
              requirements: ['BPL certificate', 'Aadhar card', 'Bank account details', 'Address proof'] }
        ],
        sahaj: [
            { name_en: 'PAN Card Application', name_hi: 'पैन कार्ड आवेदन', fee: 200, processing_time: '10-15 days',
              description_en: 'New PAN card application and processing',
              description_hi: 'नया पैन कार्ड आवेदन और प्रसंस्करण',
              requirements: ['Identity proof', 'Address proof', 'Date of birth proof', 'Photograph'] },
            { name_en: 'Passport Application', name_hi: 'पासपोर्ट आवेदन', fee: 500, processing_time: '15-30 days',
              description_en: 'Fresh passport application and renewal services',
              description_hi: 'फ्रेश पासपोर्ट आवेदन और नवीकरण सेवाएं',
              requirements: ['Birth certificate', 'Address proof', 'Identity proof', 'Photographs', 'Educational certificates'] },
            { name_en: 'Driving License', name_hi: 'ड्राइविंग लाइसेंस', fee: 300, processing_time: '7-14 days',
              description_en: 'New driving license and renewal services',
              description_hi: 'नया ड्राइविंग लाइसेंस और नवीकरण सेवाएं',
              requirements: ['Age proof', 'Address proof', 'Medical certificate', 'Driving test completion'] },
            { name_en: 'Voter ID Card', name_hi: 'मतदाता पहचान पत्र', fee: 50, processing_time: '10-15 days',
              description_en: 'Voter ID card registration and corrections',
              description_hi: 'मतदाता पहचान पत्र पंजीकरण और सुधार',
              requirements: ['Age proof (18+)', 'Address proof', 'Identity proof', 'Photograph'] }
        ]
    },

    // Admin credentials
    admin: {
        username: 'admin',
        password: 'admin123'
    }
};

// Data Storage Manager
class DataManager {
    static getApplications() {
        return JSON.parse(localStorage.getItem('applications') || '[]');
    }

    static saveApplication(application) {
        const applications = this.getApplications();
        applications.push(application);
        localStorage.setItem('applications', JSON.stringify(applications));
        return application;
    }

    static updateApplication(id, updates) {
        const applications = this.getApplications();
        const index = applications.findIndex(app => app.id === id);
        if (index !== -1) {
            applications[index] = { ...applications[index], ...updates };
            localStorage.setItem('applications', JSON.stringify(applications));
            return applications[index];
        }
        return null;
    }

    static getContacts() {
        return JSON.parse(localStorage.getItem('contacts') || '[]');
    }

    static saveContact(contact) {
        const contacts = this.getContacts();
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        return contact;
    }

    static generateApplicationId() {
        const lastId = localStorage.getItem('lastApplicationId') || '1000';
        const newId = (parseInt(lastId) + 1).toString();
        localStorage.setItem('lastApplicationId', newId);
        return `SE${newId}`;
    }
}

// Notification System
class NotificationManager {
    static show(message, type = 'info', duration = 5000) {
        const container = document.getElementById('notificationContainer');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">${icons[type] || icons.info}</div>
                <div class="notification-text">
                    <div class="notification-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                    <div class="notification-message">${message}</div>
                </div>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        container.appendChild(notification);

        if (duration > 0) {
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, duration);
        }
    }
}

// Modal System
class ModalManager {
    static show(title, content, actions = []) {
        const modal = document.getElementById('modalSystem');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const modalFooter = document.getElementById('modalFooter');

        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        
        modalFooter.innerHTML = '';
        actions.forEach(action => {
            const button = document.createElement('button');
            button.className = `btn ${action.class || 'btn--secondary'}`;
            button.textContent = action.text;
            button.onclick = action.onclick || (() => this.close());
            modalFooter.appendChild(button);
        });

        modal.classList.remove('hidden');
        modal.classList.add('show');
    }

    static close() {
        const modal = document.getElementById('modalSystem');
        modal.classList.remove('show');
        modal.classList.add('hidden');
    }
}

// Language Management
class LanguageManager {
    static setLanguage(lang) {
        console.log('Setting language to:', lang);
        CONFIG.currentLang = lang;
        document.body.setAttribute('data-lang', lang);
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update language-specific elements
        document.querySelectorAll('[data-lang-target]').forEach(element => {
            const targetLang = element.getAttribute('data-lang-target');
            if (targetLang === lang) {
                element.classList.remove('hidden');
                element.style.display = '';
            } else {
                element.classList.add('hidden');
                element.style.display = 'none';
            }
        });

        // Update select options
        this.updateSelectOptions();
    }

    static updateSelectOptions() {
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            const options = select.querySelectorAll('option');
            options.forEach(option => {
                const langElements = option.querySelectorAll('[data-lang-target]');
                if (langElements.length > 0) {
                    let newText = '';
                    langElements.forEach(langEl => {
                        if (langEl.getAttribute('data-lang-target') === CONFIG.currentLang) {
                            newText = langEl.textContent || langEl.innerText;
                        }
                    });
                    if (newText) {
                        option.textContent = newText;
                    }
                }
            });
        });
    }

    static getText(key) {
        const texts = {
            en: {
                form_success: 'Thank you! Your request has been submitted successfully.',
                form_error: 'Please fill in all required fields correctly.',
                application_submitted: 'Application submitted successfully! Your tracking ID is: ',
                contact_submitted: 'Contact message sent successfully! We will get back to you soon.',
                admin_login_success: 'Admin login successful!',
                admin_login_error: 'Invalid credentials. Please try again.',
                admin_logout: 'Logged out successfully!',
                application_updated: 'Application status updated successfully!',
                validation_name: 'Please enter a valid name (at least 2 characters)',
                validation_email: 'Please enter a valid email address',
                validation_phone: 'Please enter a valid phone number',
                validation_required: 'This field is required',
                tracking_not_found: 'Application not found. Please check your tracking number.',
                tracking_found: 'Application found! Status: '
            },
            hi: {
                form_success: 'धन्यवाद! आपका अनुरोध सफलतापूर्वक सबमिट हो गया है।',
                form_error: 'कृपया सभी आवश्यक फ़ील्ड सही तरीके से भरें।',
                application_submitted: 'आवेदन सफलतापूर्वक सबमिट हो गया! आपका ट्रैकिंग आईडी है: ',
                contact_submitted: 'संपर्क संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।',
                admin_login_success: 'प्रबंधक लॉगिन सफल!',
                admin_login_error: 'गलत क्रेडेंशियल। कृपया पुनः प्रयास करें।',
                admin_logout: 'सफलतापूर्वक लॉगआउट हो गए!',
                application_updated: 'आवेदन स्थिति सफलतापूर्वक अपडेट हो गई!',
                validation_name: 'कृपया एक वैध नाम दर्ज करें (कम से कम 2 अक्षर)',
                validation_email: 'कृपया एक वैध ईमेल पता दर्ज करें',
                validation_phone: 'कृपया एक वैध फोन नंबर दर्ज करें',
                validation_required: 'यह फ़ील्ड आवश्यक है',
                tracking_not_found: 'आवेदन नहीं मिला। कृपया अपना ट्रैकिंग नंबर जांचें।',
                tracking_found: 'आवेदन मिला! स्थिति: '
            }
        };
        
        return texts[CONFIG.currentLang]?.[key] || texts.en[key] || key;
    }
}

// Page Navigation System
class PageManager {
    static showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
            CONFIG.currentPage = pageId;
            
            // Update navigation
            this.updateNavigation(pageId);
            
            // Load page-specific content
            this.loadPageContent(pageId);
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            console.error('Page not found:', pageId);
        }
    }

    static updateNavigation(currentPage) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    static loadPageContent(pageId) {
        switch (pageId) {
            case 'edistrict':
                this.loadServiceDetails('edistrict');
                break;
            case 'csc-services':
                this.loadServiceDetails('csc');
                break;
            case 'sahaj-services':
                this.loadServiceDetails('sahaj');
                break;
            case 'admin-dashboard':
                if (CONFIG.isAdminLoggedIn) {
                    AdminManager.loadDashboard();
                } else {
                    this.showPage('admin-login');
                }
                break;
        }
    }

    static loadServiceDetails(category) {
        const container = document.getElementById(`${category}Services`) || 
                          document.getElementById(`${category === 'csc' ? 'csc' : category}Services`);
        
        if (!container || !CONFIG.services[category]) return;

        const services = CONFIG.services[category];
        container.innerHTML = services.map(service => `
            <div class="service-detail-card">
                <div class="service-detail-header">
                    <h3 class="service-detail-title">
                        <span data-lang-target="en">${service.name_en}</span>
                        <span class="hidden" data-lang-target="hi">${service.name_hi}</span>
                    </h3>
                    <div class="service-detail-info">
                        <div class="service-fee">₹${service.fee}</div>
                        <div class="service-time">${service.processing_time}</div>
                    </div>
                </div>
                <div class="service-description">
                    <span data-lang-target="en">${service.description_en}</span>
                    <span class="hidden" data-lang-target="hi">${service.description_hi}</span>
                </div>
                <div class="service-requirements">
                    <h4>
                        <span data-lang-target="en">Required Documents:</span>
                        <span class="hidden" data-lang-target="hi">आवश्यक दस्तावेज:</span>
                    </h4>
                    <ul class="requirements-list">
                        ${service.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn--primary apply-service-btn" data-service="${service.name_en}" data-category="${category}">
                    <span data-lang-target="en">Apply Now</span>
                    <span class="hidden" data-lang-target="hi">अभी आवेदन करें</span>
                </button>
            </div>
        `).join('');

        // Add event listeners to apply buttons
        container.querySelectorAll('.apply-service-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const service = this.getAttribute('data-service');
                const category = this.getAttribute('data-category');
                FormManager.preSelectService(category, service);
                PageManager.showPage('apply');
            });
        });

        // Re-apply language settings
        LanguageManager.setLanguage(CONFIG.currentLang);
    }
}

// Form Management
class FormManager {
    static currentStep = 1;
    static maxSteps = 4;
    static formData = {};

    static preSelectService(category, service) {
        // Pre-select service in the application form
        setTimeout(() => {
            const categorySelect = document.getElementById('serviceCategory');
            const serviceSelect = document.getElementById('specificService');
            
            if (categorySelect && serviceSelect) {
                categorySelect.value = category;
                
                // Trigger change event to populate services
                const changeEvent = new Event('change');
                categorySelect.dispatchEvent(changeEvent);
                
                // Wait a bit for services to populate
                setTimeout(() => {
                    serviceSelect.value = service;
                }, 100);
            }
        }, 100);
    }

    static initializeApplicationForm() {
        // Service category change handler
        const categorySelect = document.getElementById('serviceCategory');
        const serviceSelect = document.getElementById('specificService');

        if (categorySelect && serviceSelect) {
            categorySelect.addEventListener('change', function() {
                const category = this.value;
                serviceSelect.innerHTML = '<option value="">Select Service</option>';

                if (category && CONFIG.services[category]) {
                    CONFIG.services[category].forEach(service => {
                        const option = document.createElement('option');
                        option.value = service.name_en;
                        option.textContent = service.name_en;
                        serviceSelect.appendChild(option);
                    });
                }
            });
        }

        // Document upload setup
        this.setupDocumentUpload();
    }

    static nextStep() {
        if (this.validateCurrentStep()) {
            if (this.currentStep < this.maxSteps) {
                document.querySelector(`[data-step="${this.currentStep}"]`).classList.remove('active');
                this.currentStep++;
                document.querySelector(`[data-step="${this.currentStep}"]`).classList.add('active');
                
                if (this.currentStep === 4) {
                    this.setupDocumentFields();
                }
            }
        }
    }

    static prevStep() {
        if (this.currentStep > 1) {
            document.querySelector(`[data-step="${this.currentStep}"]`).classList.remove('active');
            this.currentStep--;
            document.querySelector(`[data-step="${this.currentStep}"]`).classList.add('active');
        }
    }

    static validateCurrentStep() {
        const currentStepElement = document.querySelector(`[data-step="${this.currentStep}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
                
                // Specific validations
                if (field.type === 'email' && !this.isValidEmail(field.value)) {
                    field.classList.add('error');
                    isValid = false;
                    NotificationManager.show(LanguageManager.getText('validation_email'), 'error', 3000);
                } else if (field.type === 'tel' && !this.isValidPhone(field.value)) {
                    field.classList.add('error');
                    isValid = false;
                    NotificationManager.show(LanguageManager.getText('validation_phone'), 'error', 3000);
                }
            }
        });

        if (!isValid) {
            NotificationManager.show(LanguageManager.getText('form_error'), 'error', 3000);
        }

        return isValid;
    }

    static setupDocumentFields() {
        const category = document.getElementById('serviceCategory').value;
        const serviceName = document.getElementById('specificService').value;
        const documentGrid = document.getElementById('documentGrid');

        if (!category || !serviceName || !documentGrid) return;

        const service = CONFIG.services[category].find(s => s.name_en === serviceName);
        if (!service) return;

        documentGrid.innerHTML = service.requirements.map((req, index) => `
            <div class="upload-field">
                <label for="doc_${index}">${req}</label>
                <input type="file" id="doc_${index}" name="document_${index}" accept=".pdf,.jpg,.jpeg,.png" required>
            </div>
        `).join('');
    }

    static setupDocumentUpload() {
        // File upload validation and preview could be added here
    }

    static submitApplication(formData) {
        const application = {
            id: DataManager.generateApplicationId(),
            category: formData.get('category'),
            service: formData.get('service'),
            fullName: formData.get('fullName'),
            fatherName: formData.get('fatherName'),
            dateOfBirth: formData.get('dateOfBirth'),
            gender: formData.get('gender'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            status: 'pending',
            dateSubmitted: new Date().toISOString(),
            documents: []
        };

        // Handle file uploads (in a real app, these would be uploaded to server)
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach((input, index) => {
            if (input.files.length > 0) {
                application.documents.push({
                    name: input.files[0].name,
                    type: input.files[0].type,
                    size: input.files[0].size
                });
            }
        });

        DataManager.saveApplication(application);
        
        NotificationManager.show(
            LanguageManager.getText('application_submitted') + application.id,
            'success'
        );

        // Reset form
        document.getElementById('applicationForm').reset();
        this.currentStep = 1;
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.querySelector('[data-step="1"]').classList.add('active');

        // Show confirmation modal
        ModalManager.show(
            'Application Submitted',
            `<p>Your application has been submitted successfully!</p>
             <p><strong>Tracking ID:</strong> ${application.id}</p>
             <p><strong>Service:</strong> ${application.service}</p>
             <p>You will receive updates via email and SMS.</p>`,
            [
                {
                    text: 'OK',
                    class: 'btn--primary',
                    onclick: () => {
                        ModalManager.close();
                        PageManager.showPage('home');
                    }
                }
            ]
        );
    }

    static submitContact(formData) {
        const contact = {
            id: Date.now().toString(),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            dateSubmitted: new Date().toISOString(),
            status: 'new'
        };

        DataManager.saveContact(contact);
        
        NotificationManager.show(
            LanguageManager.getText('contact_submitted'),
            'success'
        );

        // Reset form
        document.getElementById('contactForm').reset();
    }

    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
}

// Admin Management
class AdminManager {
    static login(username, password) {
        if (username === CONFIG.admin.username && password === CONFIG.admin.password) {
            CONFIG.isAdminLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            NotificationManager.show(LanguageManager.getText('admin_login_success'), 'success');
            PageManager.showPage('admin-dashboard');
            return true;
        } else {
            NotificationManager.show(LanguageManager.getText('admin_login_error'), 'error');
            return false;
        }
    }

    static logout() {
        CONFIG.isAdminLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
        NotificationManager.show(LanguageManager.getText('admin_logout'), 'success');
        PageManager.showPage('home');
    }

    static checkLoginStatus() {
        CONFIG.isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    }

    static loadDashboard() {
        this.loadApplicationsTab();
        this.loadContactsTab();
        this.loadStatsTab();
    }

    static loadApplicationsTab() {
        const applications = DataManager.getApplications();
        const tbody = document.getElementById('applicationsTableBody');
        
        if (!tbody) return;

        tbody.innerHTML = applications.map(app => `
            <tr>
                <td>${app.id}</td>
                <td>${app.fullName}</td>
                <td>${app.service}</td>
                <td>${new Date(app.dateSubmitted).toLocaleDateString()}</td>
                <td><span class="status-badge ${app.status}">${app.status}</span></td>
                <td>
                    <button class="action-btn view" onclick="AdminManager.viewApplication('${app.id}')">View</button>
                    <button class="action-btn edit" onclick="AdminManager.updateApplicationStatus('${app.id}')">Update</button>
                </td>
            </tr>
        `).join('');
    }

    static loadContactsTab() {
        const contacts = DataManager.getContacts();
        const tbody = document.getElementById('contactsTableBody');
        
        if (!tbody) return;

        tbody.innerHTML = contacts.map(contact => `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.subject}</td>
                <td>${new Date(contact.dateSubmitted).toLocaleDateString()}</td>
                <td>
                    <button class="action-btn view" onclick="AdminManager.viewContact('${contact.id}')">View</button>
                </td>
            </tr>
        `).join('');
    }

    static loadStatsTab() {
        const applications = DataManager.getApplications();
        const contacts = DataManager.getContacts();

        const totalApps = document.getElementById('totalApplications');
        const pendingApps = document.getElementById('pendingApplications');
        const completedApps = document.getElementById('completedApplications');
        const totalContacts = document.getElementById('totalContacts');

        if (totalApps) totalApps.textContent = applications.length;
        if (pendingApps) pendingApps.textContent = applications.filter(app => app.status === 'pending').length;
        if (completedApps) completedApps.textContent = applications.filter(app => app.status === 'completed').length;
        if (totalContacts) totalContacts.textContent = contacts.length;
    }

    static viewApplication(id) {
        const applications = DataManager.getApplications();
        const app = applications.find(a => a.id === id);
        
        if (!app) return;

        const content = `
            <div class="application-details">
                <p><strong>Application ID:</strong> ${app.id}</p>
                <p><strong>Service:</strong> ${app.service}</p>
                <p><strong>Name:</strong> ${app.fullName}</p>
                <p><strong>Father's Name:</strong> ${app.fatherName}</p>
                <p><strong>Email:</strong> ${app.email}</p>
                <p><strong>Phone:</strong> ${app.phone}</p>
                <p><strong>Address:</strong> ${app.address}</p>
                <p><strong>Date Submitted:</strong> ${new Date(app.dateSubmitted).toLocaleDateString()}</p>
                <p><strong>Status:</strong> <span class="status-badge ${app.status}">${app.status}</span></p>
                <p><strong>Documents:</strong> ${app.documents.length} files uploaded</p>
            </div>
        `;

        ModalManager.show('Application Details', content, [
            { text: 'Close', class: 'btn--secondary' }
        ]);
    }

    static updateApplicationStatus(id) {
        const content = `
            <div class="status-update-form">
                <label for="newStatus">Select New Status:</label>
                <select id="newStatus" class="form-control">
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                </select>
            </div>
        `;

        ModalManager.show('Update Application Status', content, [
            {
                text: 'Update',
                class: 'btn--primary',
                onclick: () => {
                    const newStatus = document.getElementById('newStatus').value;
                    DataManager.updateApplication(id, { status: newStatus });
                    NotificationManager.show(LanguageManager.getText('application_updated'), 'success');
                    this.loadApplicationsTab();
                    ModalManager.close();
                }
            },
            { text: 'Cancel', class: 'btn--secondary' }
        ]);
    }

    static viewContact(id) {
        const contacts = DataManager.getContacts();
        const contact = contacts.find(c => c.id === id);
        
        if (!contact) return;

        const content = `
            <div class="contact-details">
                <p><strong>Name:</strong> ${contact.name}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <p><strong>Phone:</strong> ${contact.phone}</p>
                <p><strong>Subject:</strong> ${contact.subject}</p>
                <p><strong>Date:</strong> ${new Date(contact.dateSubmitted).toLocaleDateString()}</p>
                <p><strong>Message:</strong></p>
                <div style="background: var(--color-bg-1); padding: 1rem; border-radius: 6px; margin-top: 8px;">
                    ${contact.message}
                </div>
            </div>
        `;

        ModalManager.show('Contact Message', content, [
            { text: 'Close', class: 'btn--secondary' }
        ]);
    }

    static switchTab(tabName) {
        // Remove active class from all tabs
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.admin-tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to selected tab
        const tabBtn = document.querySelector(`[data-admin-tab="${tabName}"]`);
        const tabContent = document.getElementById(`admin-${tabName}`);
        
        if (tabBtn) tabBtn.classList.add('active');
        if (tabContent) tabContent.classList.add('active');
    }
}

// Application Tracking
function trackApplication() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim();
    const resultDiv = document.getElementById('trackingResult');
    
    if (!trackingNumber) {
        NotificationManager.show('Please enter a tracking number', 'error');
        return;
    }

    const applications = DataManager.getApplications();
    const application = applications.find(app => app.id === trackingNumber);

    if (application) {
        resultDiv.innerHTML = `
            <div class="tracking-success">
                <h4>${LanguageManager.getText('tracking_found')} <span class="status-badge ${application.status}">${application.status}</span></h4>
                <div class="tracking-details">
                    <p><strong>Service:</strong> ${application.service}</p>
                    <p><strong>Submitted:</strong> ${new Date(application.dateSubmitted).toLocaleDateString()}</p>
                    <p><strong>Applicant:</strong> ${application.fullName}</p>
                </div>
            </div>
        `;
        resultDiv.classList.add('show');
        NotificationManager.show('Application found successfully!', 'success');
    } else {
        resultDiv.innerHTML = `
            <div class="tracking-error">
                <h4>${LanguageManager.getText('tracking_not_found')}</h4>
                <p>Please verify your tracking number and try again.</p>
            </div>
        `;
        resultDiv.classList.add('show');
        NotificationManager.show('Application not found', 'error');
    }
}

// Mobile Menu Management
class MobileMenuManager {
    static toggle() {
        const navLinks = document.querySelector('.nav-links');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks && mobileBtn) {
            const isActive = navLinks.classList.contains('mobile-active');
            
            if (isActive) {
                this.close();
            } else {
                this.open();
            }
        }
    }

    static open() {
        const navLinks = document.querySelector('.nav-links');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks && mobileBtn) {
            navLinks.classList.add('mobile-active');
            mobileBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    static close() {
        const navLinks = document.querySelector('.nav-links');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks && mobileBtn) {
            navLinks.classList.remove('mobile-active');
            mobileBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Utility Functions
function closeModal() {
    ModalManager.close();
}

function adminLogout() {
    AdminManager.logout();
}

function nextStep() {
    FormManager.nextStep();
}

function prevStep() {
    FormManager.prevStep();
}

// Global Event Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize application
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Suryansh Enterprises app...');
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => loadingScreen.remove(), 300);
        }
    }, 1000);

    // Check admin login status
    AdminManager.checkLoginStatus();

    // Initialize language
    LanguageManager.setLanguage(CONFIG.currentLang);

    // Initialize form handlers
    setupEventHandlers();

    // Load initial page content
    PageManager.loadPageContent('home');

    // Add sample data
    addSampleData();

    console.log('App initialized successfully');
}

function setupEventHandlers() {
    console.log('Setting up event handlers...');

    // Language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            console.log('Language changed to:', lang);
            LanguageManager.setLanguage(lang);
        });
    });

    // Navigation links - ALL navigation elements
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const page = this.getAttribute('data-page');
            console.log('Navigation clicked:', page);
            PageManager.showPage(page);
            MobileMenuManager.close();
        });
    });

    // Service cards navigation
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                console.log('Service card clicked:', page);
                PageManager.showPage(page);
            }
        });
    });

    // Mobile menu button
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu toggled');
            MobileMenuManager.toggle();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted');
            const formData = new FormData(this);
            FormManager.submitContact(formData);
        });
    }

    // Application form
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        FormManager.initializeApplicationForm();
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Application form submitted');
            if (FormManager.validateCurrentStep()) {
                const formData = new FormData(this);
                FormManager.submitApplication(formData);
            }
        });
    }

    // Admin login form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Admin login attempted');
            const formData = new FormData(this);
            AdminManager.login(formData.get('username'), formData.get('password'));
        });
    }

    // Admin tab buttons
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-admin-tab');
            console.log('Admin tab clicked:', tabName);
            AdminManager.switchTab(tabName);
        });
    });

    // Hero buttons
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                console.log('Hero button clicked:', page);
                PageManager.showPage(page);
            }
        });
    });

    // Application tracking button
    const trackBtn = document.querySelector('.tracking-form .btn');
    if (trackBtn) {
        trackBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Track button clicked');
            trackApplication();
        });
    }

    // Fix tracking input - prevent navigation
    const trackingInput = document.getElementById('trackingNumber');
    if (trackingInput) {
        trackingInput.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        trackingInput.addEventListener('focus', function(e) {
            e.stopPropagation();
        });
    }

    // Close modal on backdrop click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop')) {
            ModalManager.close();
        }
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (navLinks && navLinks.classList.contains('mobile-active') && 
            !nav.contains(e.target)) {
            MobileMenuManager.close();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            ModalManager.close();
            MobileMenuManager.close();
        }
    });

    // Form validation helpers
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', function() {
            this.classList.remove('error');
        });

        input.addEventListener('focus', function() {
            this.classList.remove('error');
        });
    });

    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            MobileMenuManager.close();
        }
    });

    console.log('Event handlers setup complete');
}

// Add sample data for demo purposes
function addSampleData() {
    // Add sample applications if none exist
    const applications = DataManager.getApplications();
    if (applications.length === 0) {
        const sampleApplications = [
            {
                id: 'SE1001',
                category: 'edistrict',
                service: 'Birth Certificate',
                fullName: 'Rajesh Kumar',
                fatherName: 'Suresh Kumar',
                dateOfBirth: '1990-05-15',
                gender: 'male',
                phone: '+91 9876543210',
                email: 'rajesh@example.com',
                address: 'Sample Address, City, State - 123456',
                status: 'completed',
                dateSubmitted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                documents: [
                    { name: 'birth_record.pdf', type: 'application/pdf', size: 2048576 }
                ]
            },
            {
                id: 'SE1002',
                category: 'csc',
                service: 'Aadhar Update',
                fullName: 'Priya Sharma',
                fatherName: 'Ram Sharma',
                dateOfBirth: '1985-12-10',
                gender: 'female',
                phone: '+91 8765432109',
                email: 'priya@example.com',
                address: 'Another Address, City, State - 654321',
                status: 'processing',
                dateSubmitted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                documents: [
                    { name: 'aadhar_original.jpg', type: 'image/jpeg', size: 1024576 },
                    { name: 'address_proof.pdf', type: 'application/pdf', size: 3072576 }
                ]
            }
        ];

        localStorage.setItem('applications', JSON.stringify(sampleApplications));
        localStorage.setItem('lastApplicationId', '1002');
    }

    // Add sample contacts if none exist
    const contacts = DataManager.getContacts();
    if (contacts.length === 0) {
        const sampleContacts = [
            {
                id: '1',
                name: 'Amit Singh',
                email: 'amit@example.com',
                phone: '+91 7654321098',
                subject: 'general',
                message: 'I need information about PAN card application process.',
                dateSubmitted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                status: 'new'
            }
        ];

        localStorage.setItem('contacts', JSON.stringify(sampleContacts));
    }
}

// Export for testing purposes
window.SuryanshApp = {
    CONFIG,
    DataManager,
    NotificationManager,
    ModalManager,
    LanguageManager,
    PageManager,
    FormManager,
    AdminManager,
    MobileMenuManager,
    trackApplication
};

console.log('Suryansh Enterprises application loaded successfully!');